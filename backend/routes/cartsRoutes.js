const express = require('express');
const router = express.Router();

const { saveCart } = require('../controller/cartControllers');

router.post('/', saveCart);

module.exports = router;