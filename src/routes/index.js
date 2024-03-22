const express = require('express');
const userRouter = require('./user.router');
const productRouter = require('./product.router');
const router = express.Router();


router.use('/users', userRouter)
router.use('/products', productRouter)


module.exports = router;
