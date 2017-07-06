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
