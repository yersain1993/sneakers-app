const Product = require('../models/Product');
const User = require('../models/User');
const catchError = require('../utils/catchError');


const getOne = catchError(async(req,res) => {
    const { userId, productName } = req.params;
    const user = await User.findOne({id: +userId});
    if(!user) return res.status(404).json({message: 'User not found'});
    const product = await Product.findOne({nombre: productName});
    if(!product) return res.status(404).json({message: 'Product not found'});
    const price = user.get('metadata')?.precios_especiales
            .find(item => item.nombre_producto === productName);
   
    if(!price) return res.json({price: product.get('precio_base')})

    return res.json({price: price.precio_especial_personal});
});


module.exports = {
    getOne,
}


