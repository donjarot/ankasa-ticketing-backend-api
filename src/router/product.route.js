const express = require('express');

const {
    getListProduct,
    createdProduct,
    getDetailProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/product.controller');
const jwtAuth = require('../middlewares/jwtAuth');
const productValidation = require('../validations/product.validation');
const runValidation = require('../middlewares/runValidation');

const route = express.Router();

route
    .get('/product', getListProduct)
    .post('/product', productValidation.post, runValidation, createdProduct)
    .get('/product-detail/:id', getDetailProduct)
    .put('/product/:id', productValidation.post, runValidation, updateProduct)
    .delete('/delete-product/:id', deleteProduct);

module.exports = route;
