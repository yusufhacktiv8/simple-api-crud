const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
  name: String,
  owner: String,
  address: String,
}, {
  timestamps: true,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;