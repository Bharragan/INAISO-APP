const User = require('../models/User');
const Product = require('../models/Product');

// Controlador para obtener todos los usuarios
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Controlador para obtener un usuario por su ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Controlador para agregar un producto a la lista de un usuario
const updateProductForUser = async (req, res) => {
  try {
    const { userId, productId } = req.params;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    const currentDate = new Date();
    // Crea un nuevo objeto con los datos del producto
    const productData = {
      name: product.name,
      product_id: product._id,
      reservationDate: currentDate,
    };

    // Agrega el producto como un objeto en la lista de productos del usuario
    user.products.push(productData);

    // Guarda los cambios en la base de datos
    await user.save();

    res.json(user.products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = {
  updateProductForUser,
};

// Controlador para eliminar un producto de la lista de un usuario
const deleteProductForUser = async (req, res) => {
  try {
    const { userId, productId } = req.params;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Encuentra el producto en la lista del usuario por su ID
    const productIndex = user.products.findIndex((product) => product._id.toString() === productId);
    if (productIndex === -1) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    // Elimina el producto de la lista del usuario
    user.products.splice(productIndex, 1);

    // Guarda los cambios en la base de datos
    await user.save();

    res.json(user.products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Controlador para crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const { username, email } = req.body;

    // Crea un nuevo usuario
    const newUser = new User({
      username,
      email,
      products: [], // Inicialmente, la lista de productos del usuario estará vacía
    });

    // Guarda el nuevo usuario en la base de datos
    await newUser.save();

    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = {
  getUsers,
  getUserById,
  updateProductForUser,
  createUser,
  deleteProductForUser,
};
