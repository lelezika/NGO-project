const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  eventName: String,
  description: String,
  category: String,
  startDate: String,
  endDate: String,
  startTime: String,
  endTime: String,
  location: String,
  status: String,
  imagePath: String,
  adultTicketPrice: Number,
  childTicketPrice: Number
});

module.exports = mongoose.model('Event', eventSchema);
