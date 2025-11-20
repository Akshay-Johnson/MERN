const product = require('../models/productModel');
exports.getproducts = async (req, res) => {
    const products = await product.find();
    res.json(products);
}