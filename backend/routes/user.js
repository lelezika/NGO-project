const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const checkAuth = require("../middleware/check-auth");

const User = require("../models/user");

const router = express.Router();

router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hash,
      role: req.body.role
    });
    user
      .save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
});

router.post("/login", (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Authentication failed"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Authentication failed"
        });
      }
      const token = jwt.sign(
        {
          email: fetchedUser.email,
          userId: fetchedUser._id,
          userRole: fetchedUser.role
        },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        role: fetchedUser.role
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Authentication failed"
      });
    });
});

/*Post New User */
router.post("/", checkAuth, function(req, res, next) {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hash,
      role: req.body.role
    });
    user
      .save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
});

/*Get all users */
router.get("/", function(req, res, next) {
  User.find(req.body, function(err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

/*Get single user by email */
router.get('/:email',function(req,res,next){
  let email=req.params.email;
  console.log(req.params.email);
  console.log(email);
     User.findOne({'email':email},function(err,user){
      if(err)return next(err);
      res.json(user);
  });
});

/*Update user */
router.put('/:email',function(req,res,next){
  bcrypt.hash(req.body.password, 10).then(hash => {
    User.findOneAndUpdate(
      {'email':req.params.email},
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash,
        role: req.body.role
      },
      {new:true},
      function(err,user){
    if(err) return next(err);
    res.json(user);
  });
  });
});


/*Delete user */
router.delete("/:email", checkAuth, function(req, res, next) {
  //Game.findByIdAndDelete(req.params.id,function(err,game){
  User.findOneAndDelete({ email: req.params.email }, function(err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

module.exports = router;
