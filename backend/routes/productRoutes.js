// backend/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rutas para productos

// Ruta para agregar un producto
router.post('/', productController.addProduct);

module.exports = router;
