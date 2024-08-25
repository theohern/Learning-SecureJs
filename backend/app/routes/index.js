const express = require('express');
const connectDB = require('../../config/config'); // Assurez-vous que ce chemin est correct
const userRoutes = require('./userRoutes');
const path = require('path');
const cors = require('cors');

const app = express();

// Connexion à la base de données
connectDB(); // Assurez-vous que cette fonction gère les erreurs

app.use(cors({
  origin: 'http://192.168.1.41:3000', // Autorise uniquement les requêtes provenant de votre front-end
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // Ajoute Access-Control-Allow-Credentials si nécessaire
}));

// Gérer explicitement les pré-requêtes OPTIONS
app.options('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://192.168.1.41:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.sendStatus(200);
});

// Middleware pour parser le JSON dans les requêtes
app.use(express.json());

// Routes des utilisateurs
app.use('/users', userRoutes); // Toutes les routes utilisateur commenceront par '/users'

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
