const express = require('express');
const router = express.Router();

const { saveCart, getCarts } = require('../controller/cartControllers');

router.post('/', saveCart);

router.get('/', getCarts);

module.exports = router;