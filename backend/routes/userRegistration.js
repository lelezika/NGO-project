const express = require("express");

const UserRegistration = require("../models/registration");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

// /*Save Registration */
// router.post('/', function (req, res, next) {
//   registeredAttendant.create(req.body, function (err, reg) {
//       if (err) console.log(err);
//       res.json(reg);
//   });

// });

/*Save Registration */
router.post("", (req, res, next) => {
  const userRegister = new UserRegistration({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    contactNumber: req.body.contactNumber,
    address: req.body.address,
    adultQuantity: req.body.adultQuantity,
    childQuantity: req.body.childQuantity,
    eventId: req.body.eventId
  });
  console.log(userRegister);
  userRegister.save().then(userReg => {
    res.status(201).json({
      message: "user Registered for Event successfully!",
      userRegistered: {
        ...userReg,
        id: userReg._id
      }
    });
  });
});

/*Get all UserRegistrations */
router.get("/", function(req, res, next) {
  UserRegistration.find(function(err, regUser) {
    if (err) return next(err);
    res.json(regUser);
  });
});

/*Get single UserRegistration by id */
router.get("/:id", function(req, res, next) {
  let id = req.params.id;
  // console.log(req.params.email);
  // console.log(email);
  UserRegistration.findById(id, function(err, regUser) {
    if (err) return next(err);
    res.json(regUser);
  });
});

/*Update UserRegistration by id */
router.put("/:id", function(req, res, next) {
  UserRegistration.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    function(err, regUser) {
      if (err) return next(err);
      res.json(regUser);
    }
  );
});

/*Delete UserRegistration by id */
router.delete("/:id", function(req, res, next) {
  //Game.findByIdAndDelete(req.params.id,function(err,game){
  UserRegistration.findByIdAndDelete(req.params.id, function(err, regUser) {
    if (err) return next(err);
    res.json(regUser);
  });
});

module.exports = router;
