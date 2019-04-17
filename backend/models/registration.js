const mongoose = require("mongoose");

const regschema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    contactNumber: String,
    address: String,
    adultQuantity: String,
    childQuantity: String,
    eventId: String

});

module.exports = mongoose.model('RegisteredAttendant', regschema);
