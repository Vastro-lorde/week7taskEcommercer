// importing the necessary modules
const express = require('express');
const router = express.Router();
const productController = require('../controller/productController')

router.get('/products', productController.listAllProducts);
router.post('/add-product', productController.addProduct);
router.get('/:id', productController.findAproduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id',productController.deleteProduct);


module.exports = router;