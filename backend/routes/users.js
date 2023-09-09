// backend/routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Ruta para agregar un producto a la lista de un usuario
router.post('/:userId/products', async (req, res) => {
  try {
    const { name, reservationDate } = req.body;
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    user.products.push({ name, reservationDate });
    await user.save();
    res.json(user.products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Otras rutas para editar, actualizar y eliminar productos de la lista del usuario

module.exports = router;
