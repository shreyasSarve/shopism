const Schema = require("mongoose").Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  cart: {
    type: String,
  },
  notifications: {
    type: Array,
  },
  address: {
    type: Array,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
