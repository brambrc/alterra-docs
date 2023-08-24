const productModel = require('../models/productModel');

function getAllProducts(req, res) {
    const products = productModel.getAllProducts();
    res.json(products);
}

module.exports = {
    getAllProducts
};
