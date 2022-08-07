const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//product Schema
const ProductSchema = new Schema({
  name: String,
  description: String,
  species: String,
  image: String,
  price: Number,
  available: Boolean,
  state: String,
  created: { type: Date, default: Date.now },
});

let Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
