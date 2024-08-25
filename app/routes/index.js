const express = require('express');
const connectDB = require('../../config/config');
const userRoutes = require('./userRoutes');

const app = express();

// Connexion à la base de données
connectDB();

// Middleware pour parser le JSON dans les requêtes
app.use(express.json());

// Route de base
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Routes des utilisateurs
app.use('/users', userRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
