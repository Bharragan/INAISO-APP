const mongoose = require('mongoose');

// Define el esquema del producto
const productSchema = new mongoose.Schema({
  name: String,
  reservationDate: Date,
});

// Define el esquema del usuario
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  // Otros campos necesarios
  products: [productSchema], // Array de objetos de productos
}, {
  timestamps: true, // Habilita las propiedades createdAt y updatedAt
});

module.exports = mongoose.model('User', userSchema);
