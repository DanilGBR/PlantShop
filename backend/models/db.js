const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, (err) => {
  if (!err) {
    console.log("Connected to " + process.env.MONGODB_URI);
  } else {
    console.log(
      "Error in connection to MongoDB" + JSON.stringify(err, undefined, 2)
    );
  }
});
