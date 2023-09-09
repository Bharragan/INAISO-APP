// backend/controllers/productController.js
const Product = require('../models/Product');

// Controlador para agregar un producto a la lista de un usuario
const addProduct = async (req, res) => {
  try {
    const { name } = req.body;

    // Crear un nuevo producto
    const newProduct = new Product({ name });

    // Guardar el producto en la base de datos
    await newProduct.save();

    res.status(201).json({ message: 'Producto creado exitosamente', product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Controlador para eliminar un producto de la lista de un usuario
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    // Eliminar el producto por su ID
    await Product.findByIdAndRemove(productId);
    res.json({ message: 'Producto eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Controlador para obtener todos los productos
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Controlador para obtener un producto por su ID
const getProductById = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Controlador para actualizar la fecha de reserva de un producto
const updateProductReservationDate = async (req, res) => {
  try {
    const productId = req.params.productId;
    const { reservationDate } = req.body;

    // Actualizar la fecha de reserva del producto por su ID
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { reservationDate },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.json({ message: 'Fecha de reserva actualizada exitosamente', product: updatedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = {
  addProduct,
  getProducts,
  getProductById,
  deleteProduct,
  updateProductReservationDate,
};
