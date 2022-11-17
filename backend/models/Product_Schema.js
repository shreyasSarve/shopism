const Schema = require("mongoose").Schema;

const ProductSchema = new Schema({
  seller: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    default: 1,
  },
  category: {
    type: String,
    default: "Other",
  },
  images: {
    type: Array,
  },
  discription: {
    type: JSON,
  },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
