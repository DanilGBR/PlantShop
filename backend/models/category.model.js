const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//product Schema
const categorySchema = new Schema(
  {
    name: String,
    imageSource: String,
  },
  {
    timestamps: false,
    collection: "Categories",
  }
);

let Category = mongoose.model("Category", categorySchema);
module.exports = { Category };
