const express = require("express");

const Event = require('../models/eventModel');
const checkAuth = require("../middleware/check-auth");

const router = express.Router();


// Post new Event
router.post(
  "",
  checkAuth,

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
      imagePath: req.body.imagePath
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
router.put(
  '/:id',
  checkAuth,
  (req,res,next) => {
    let imagePath = req.body.imagePath;
    if(req.file){
      const url = req.protocol + "://" + req.get("host");
    }
    const event = new Event({
      _id: req.body.id,
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
      imagePath: imagePath
    });
    console.log(event);
    Event.updateOne({ _id: req.params.id }, event).then(result => {
      res.status(200).json({ message: "Update successful!" });
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
