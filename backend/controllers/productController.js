// backend/controllers/productController.js
const Product = require('../models/Product');

// Controlador para agregar un producto a la lista de un usuario
const addProduct = async (req, res) => {
  try {
    const { name, reservationDate } = req.body;

    // Crear un nuevo producto
    const newProduct = new Product({ name, reservationDate });

    // Guardar el producto en la base de datos
    await newProduct.save();

    res.status(201).json({ message: 'Producto creado exitosamente', product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = {
  addProduct,
};
