const express = require('express');
const { getAll, create, getOne, update, remove } = require('../controllers/product.controller');


const productRouter = express.Router();

productRouter.route('/')
    .get(getAll)


module.exports = productRouter;