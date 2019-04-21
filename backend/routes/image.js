const express = require("express");

const EventImage = require("../models/image");

const router = express.Router();

router.get("/:id", function(req, res, next) {
  let id = req.params.id;
  EventImage.findOne({ apiName: id }, function (err, image) {
    if (err) return next(err);
    res.send(image.filePath);
  });
});

module.exports = router;
