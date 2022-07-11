require("./config/config");
require("./models/db");

const express = require("express");
const bodyParser = require("body-parser");
var usersController = require("./controllers/usersController.js");

const app = express();
const routesIndex = require("./routes/index.router");
const e = require("express");

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// pass to router
app.use("/api", routesIndex);

//error handling
app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    var valErrors = [];
    Object.keys(err.errors).forEach((key) =>
      valErrors.push(err.errors[key].message)
    );
    return res.status(422).json(valErrors);
  }
});

module.exports = app;
