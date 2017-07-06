const express = require('express');
const restaurantController = require('../controller/restaurants');

const router = express.Router();

router.post('/', restaurantController.create);
router.get('/', restaurantController.findAll);
router.get('/:id', restaurantController.findOne);
router.put('/:id', restaurantController.update);
router.delete('/:id', restaurantController.delete);

module.exports = router;
