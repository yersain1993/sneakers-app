const Product = require('../models/Product');
const catchError = require('../utils/catchError');

const getAll = catchError(async(req, res) => {
    const product = await Product.find();
    const stock = product.filter(item => item.get('existencia') > 0);
    return res.json(stock);
});

module.exports = {
    getAll,
}