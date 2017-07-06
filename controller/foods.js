const Food = require('../model/food');

exports.create = function(req, res) {
  const food = new Food(req.body);
  food.save(function (err) {
    if (err) return res.status(500).send('Error when save');
    res.send({ message: 'Food created' });
  })
};

exports.findAll = function(req, res) {
  Food.find(function (err, foods) {
    if (err) return console.error(err);
    res.json(foods);
  });
};

exports.findOne = function(req, res) {
  const query = { _id: req.params.id };
  Food.findOne(query, function (err, food) {
    if (err) return res.status(404).send('Food not found');
    res.json(food);
  });
};

exports.update = function(req, res) {
  const food = req.body;
  const query = { _id: req.params.id };
  Food.findOneAndUpdate(query, { $set: { name: food.name, price: food.price } }, {}, (err) => {
    if (err) return res.status(500).send('Error when update');
    res.send({ message: 'Food updated' });
  });
};

exports.delete = function(req, res) {
  const query = { _id: req.params.id };
  Food.remove(query, (err) => {
    if (err) return res.status(404).send('Food not found');
    res.send({ message: 'Food deleted' });
  });
};
