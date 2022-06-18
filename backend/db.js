const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/RadPlantsDB", (err) => {
  if (!err) console.log("Connected to MongoDB successfully. ");
  else
    console.log("Error in DB connection: " + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;
