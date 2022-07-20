const Product = require('../models/product.model');

const createProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => {
            res.status(201).json(newProduct);
        })
        .catch((err) => {
            console.log('Error creating Products', err);
            res.status(400).json({message: 'Error creating Product', error: err});
        });
};

const getProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.status(201).json(allProducts);
        })
        .catch((err) => {
            console.log('Error getting all Products', err);
            res.status(400).json({message: 'Error getting all Products', error: err});
        });
};


const getProductById = (req, res) => {
    Product.findById(req.params.id)
        .then((oneProduct) => {
            res.status(201).json(oneProduct);
        })
        .catch((err) => console.log('Error getting one Product', err));
};

const updateProductById = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body)
        .then((updatedProduct) => {
            res.status(201).json(updatedProduct);
        })
        .catch((err) => console.log('Error updating one Product', err));
};

const deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then((result) => {
            res.status(201).json(result);
        })
        .catch((err) => console.log('Error deleting one Product', err));
};


module.exports = {
    getProducts,
    createProduct,
    getProductById,
    updateProductById,
    deleteProduct,
};