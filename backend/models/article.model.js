const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//product Schema
const articleSchema = new Schema(
  {
    edition: Number,
    title: String,
    author: String,
    imageSource: String,
  },
  {
    timestamps: true,
    collection: "Articles",
  }
);

let Article = mongoose.model("Article", articleSchema);
module.exports = { Article };
