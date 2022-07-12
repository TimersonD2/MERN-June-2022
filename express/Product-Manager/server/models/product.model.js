const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title:String,
    price:String,
    description:String,
}, {timestamps:true});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;

