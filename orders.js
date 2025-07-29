const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  quantity: Number,
  status: String
});

const orderSchema = new mongoose.Schema({
  userId: String,
  items: [itemSchema],
  total: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model("Order", orderSchema);
