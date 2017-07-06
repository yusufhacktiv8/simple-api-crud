const Food = require('../model/food');

exports.findAll = function(req, res) {
  Food.find(function (err, foods) {
    if (err) return console.error(err);
    res.json(foods);
  });
};
