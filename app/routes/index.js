const express = require('express');
const connectDB = require('../../config/config'); // Assurez-vous que ce chemin est correct
const userRoutes = require('./userRoutes');
const path = require('path');

const app = express();

// Connexion à la base de données
connectDB(); // Assurez-vous que cette fonction gère les erreurs

// Middleware pour parser le JSON dans les requêtes
app.use(express.json());

// Servir des fichiers statiques
app.use(express.static(path.join(__dirname, '../public'))); // Vérifiez le chemin du dossier 'public'

// Routes des utilisateurs
app.use('/users', userRoutes); // Toutes les routes utilisateur commenceront par '/users'

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
