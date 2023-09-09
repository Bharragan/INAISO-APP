// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rutas para usuarios

// Obtener todos los usuarios
router.get('/', userController.getUsers);

// Obtener un usuario por ID
router.get('/:userId', userController.getUserById);

module.exports = router;
