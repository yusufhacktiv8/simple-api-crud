const Restaurant = require('../model/restaurant');

exports.create = function(req, res) {
  const restaurant = new Restaurant(req.body);
  restaurant.save(function (err) {
    if (err) return res.status(500).send('Error when save');
    res.send({ message: 'Restaurant created' });
  })
};

exports.findAll = function(req, res) {
  Restaurant.find(function (err, restaurants) {
    if (err) return console.error(err);
    res.json(restaurants);
  });
};

exports.findOne = function(req, res) {
  const query = { _id: req.params.id };
  Restaurant.findOne(query, function (err, restaurant) {
    if (err) return res.status(404).send('Restaurant not found');
    res.json(restaurant);
  });
};

exports.update = function(req, res) {
  const restaurant = req.body;
  const query = { _id: req.params.id };
  Restaurant.findOneAndUpdate(query, { $set: restaurant }, {}, (err) => {
    if (err) return res.status(500).send('Error when update');
    res.send({ message: 'Restaurant updated' });
  });
};

exports.delete = function(req, res) {
  const query = { _id: req.params.id };
  Restaurant.remove(query, (err) => {
    if (err) return res.status(404).send('Restaurant not found');
    res.send({ message: 'Restaurant deleted' });
  });
};
