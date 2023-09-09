const express = require('express');
const { addProduct, updateProductReservationDate, deleteProduct, getProducts, getProductById } = require('../controllers/productController');

const router = express.Router();

// Rutas para productos
router.post('/', addProduct);
router.get('/', getProducts); // Ruta para obtener todos los productos
router.get('/:productId', getProductById); // Ruta para obtener un producto por su ID
router.put('/:productId', updateProductReservationDate);
router.delete('/:productId', deleteProduct);

module.exports = router;
