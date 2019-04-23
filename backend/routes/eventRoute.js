const express = require("express");
const multer = require('multer');

const Event = require('../models/eventModel');
const EventImage = require("../models/image");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'backend/images/upload');
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.' + file.mimetype.substring(6));
  }
});
const upload = multer({storage: storage});


// Post new Event
router.post(
  "",
  checkAuth, upload.any(),
  (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");
    const event = new Event({
      eventName: req.body.eventName,
      description: req.body.description,
      category: req.body.category,
      status: req.body.status,
      location: req.body.location,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      adultTicketPrice: req.body.adultTicketPrice,
      childTicketPrice: req.body.childTicketPrice,
      imagePath: ''
    });
    event.save().then(createdEvent => {
      res.status(201).json({
        message: 'Event added successfully!',
        event: {
          ...createdEvent,
          id: createdEvent._id
        }
      })
    });
  }
);

/** UPDATE Event */
router.put('/:id', checkAuth,
  upload.single('file'),
  (req, res, next) => {
    let eventId = req.params.id;
    if(req.file){
      req.body.filePath = req.file.path;
      req.body.imagePath = '/images/' + eventId;
    } else {
      req.body.filePath = '';
      req.body.imagePath = '';
    }
    console.log(req.file);
    const eventData = {
      eventName: req.body.eventName,
      description: req.body.description,
      category: req.body.category,
      status: req.body.status,
      location: req.body.location,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      adultTicketPrice: req.body.adultTicketPrice,
      childTicketPrice: req.body.childTicketPrice
    };
    if (req.body.imagePath !== '') {
      eventData['imagePath'] = req.body.imagePath;
    }
    Event.findOneAndUpdate({_id: eventId}, eventData, {},
      function(err, doc) {
        if (err) return res.status(500, {error: err});
        let updateParams = { filePath: req.body.filePath };
        if (req.body.filePath === '') {
          updateParams = {};
        }
        console.log(updateParams);
        EventImage.findOneAndUpdate({ eventId: eventId },
          updateParams, { upsert: true },
        function(err, doc) {
            if (err) return res.status(500, {error: err});
            res.status(200).json({ message: "Update successful!" });
        });
    });
  }
);

//Get all Events
router.get("", (req, res, next) => {
  Event.find().then(documents => {
    res.status(200).json(
      documents
    );
  });
});

//Get one Event by Id
router.get('/:id', (req, res, next) => {
  Event.findById(req.params.id).then(event => {
    if(event){
      res.status(200).json(event);
    }else{
      res.status(404).json({message: 'Event not found!'});
    }
  });
});


module.exports = router;
