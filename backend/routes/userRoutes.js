const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUserById,
  updateProductForUser,
  createUser,
  deleteProductForUser,
} = require('../controllers/userController');

// Rutas para usuarios
router.get('/', getUsers);
router.get('/:userId', getUserById);
router.put('/:userId/products/:productId', updateProductForUser);
router.post('/', createUser);
router.delete('/:userId/products/:productId', deleteProductForUser);

module.exports = router;
