const Schema = require("mongoose").Schema;

const CartSchema = new Schema({
  owner: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  products: {
    type: Array,
    default: [],
  },
  total: {
    type: Number,
    default: 0,
  },
});

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
