const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({}, {collection: 'products'});

const Product = mongoose.model("Product", productSchema, 'products');
module.exports = Product;
