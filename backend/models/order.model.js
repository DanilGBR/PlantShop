const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  totalPrice: { type: Number, default: 0 },
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, default: 1 },
    },
  ],
});

let Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
