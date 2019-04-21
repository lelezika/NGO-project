const mongoose = require('mongoose')

const imageSchema = mongoose.Schema ({
  eventId: String,
  filePath: String
});

module.exports = mongoose.model('EventImage', imageSchema);
