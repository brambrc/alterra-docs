const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.get('/', roleMiddleware(['admin', 'manager']), productController.getAllProducts);

module.exports = router;
