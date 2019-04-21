const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const eventsRoutes = require("./routes/eventRoute");
const userRoutes= require("./routes/user");
const userRegistrationRoutes = require("./routes/userRegistration");
const imageRoutes = require("./routes/image");

const ngoApp = express();

/**
 * Connecting to Online mongoDB cluster
 */
//  mongoose.connect("mongodb+srv://apson:<Password-here>@cluster0-q9gaw.mongodb.net/mean-stack?retryWrites=true", { useNewUrlParser: true})
//   .then(() => console.log('Connected to Online Cluster of MongoDB'))
//   .catch(() => console.log('Connection to online cluster failed'));

/**
 * Connecting to MongoDB local MongoDB compass communicity or robo 3T
 */
mongoose.connect('mongodb://localhost/ngoProject', { useNewUrlParser: true})
  .then(() => console.log('Connected to local MongoDB!'))
  .catch((err) => console.error('Something went wrong while connecting to local MongoDB', err));

// To accept body in both Url encoded and Json formats.
ngoApp.use(bodyParser.json());
ngoApp.use(bodyParser.urlencoded({extended: false}));

ngoApp.use("/images", express.static(path.join("backend/images")));

// To enable CORS
ngoApp.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, PUT, OPTIONS"
  )
  next();
});

ngoApp.use("/api/events", eventsRoutes);
ngoApp.use("/api/user", userRoutes);
ngoApp.use("/api/userRegistration", userRegistrationRoutes);
ngoApp.use("/images", imageRoutes);

module.exports = ngoApp;
