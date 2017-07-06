const express = require('express');
const foodController = require('../controller/foods');

const router = express.Router();

router.post('/', foodController.create);
router.get('/', foodController.findAll);

module.exports = router;
