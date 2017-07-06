const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  name: String,
  price: Number,
}, {
  timestamps: true,
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;