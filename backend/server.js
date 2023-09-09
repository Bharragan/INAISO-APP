// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config(); // Carga las variables de entorno desde .env

const app = express();

// Configuración de la base de datos (conexión a MongoDB)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
  })
  .catch((error) => {
    console.error('Error de conexión a MongoDB:', error);
  });

// Configuración de middlewares y rutas
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Iniciar el servidor en el puerto especificado en las variables de entorno
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
