const Product = require('../models/Product');
const catchError = require('../utils/catchError');

const getAll = catchError(async(req, res) => {
    const product = await Product.find();
    return res.json(product);
});

module.exports = {
    getAll,
}