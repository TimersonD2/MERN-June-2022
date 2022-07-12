const productController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api/products', productController.getProducts);
    app.post('/api/products', productController.createProduct);
    app.get('/api/products/:id', productController.getProductById);
    app.put('/api/products/:id', productController.updateProductById);
    app.delete('/api/products/:id', productController.deleteProduct);
};


