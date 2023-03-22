const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//product Schema
const ProductSchema = new Schema(
  {
    name: String,
    description: String,
    category: {type: Schema.ObjectId, ref:'Categories'},
    imageSource: String,
    price: Number,
    available: Boolean,
    isNewProduct: Boolean,
    created: { type: Date, default: Date.now },
  },
  {
    timestamps: false,
    collection: "Products",
  }
);

ProductSchema.pre("save", function (next) {
  const product = this;
  if (this.isNew) {
    product.isNewProduct = true;
  } else {
    product.isNewProduct = false;
  }
  next();
});

let Product = mongoose.model("Product", ProductSchema);
module.exports = { Product };
