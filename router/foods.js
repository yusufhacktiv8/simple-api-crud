const express = require('express');
const foodController = require('../controller/foods');

const router = express.Router();

router.post('/', foodController.create);
router.get('/', foodController.findAll);
router.get('/:id', foodController.findOne);
router.put('/:id', foodController.update);
router.delete('/:id', foodController.delete);

module.exports = router;
