// backend/models/User.js
const mongoose = require('mongoose');
const productSchema = require('./Product'); // Asegúrate de que la ruta sea correcta

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  // Otros campos necesarios
  products: [productSchema], // Lista de productos reservados
}, {
  timestamps: true, // Habilita las propiedades createdAt y updatedAt
});

module.exports = mongoose.model('User', userSchema);
