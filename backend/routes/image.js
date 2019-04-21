const express = require("express");

const EventImage = require("../models/image");

const router = express.Router();

router.get("/:id", function(req, res, next) {
  let id = req.params.id;
  EventImage.findOne({ eventId: id }, function (err, image) {
    if (err) return next(err);
    if (image) {
      res.sendfile(image.filePath);
    } else {
      res.status(404, {error:"File not found"});
    }
  });
});

module.exports = router;
