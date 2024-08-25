const User = require('../models/userModel');

// Récupérer tous les utilisateurs
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).send('Erreur serveur');
    }
};

// Récupérer un utilisateur par ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send('Utilisateur non trouvé');
        res.json(user);
    } catch (err) {
        res.status(500).send('Erreur serveur');
    }
};

// Créer un nouvel utilisateur
exports.createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).send('Erreur serveur');
    }
};

// Mettre à jour un utilisateur
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).send('Utilisateur non trouvé');
        res.json(user);
    } catch (err) {
        res.status(500).send('Erreur serveur');
    }
};

// Supprimer un utilisateur
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).send('Utilisateur non trouvé');
        res.send('Utilisateur supprimé');
    } catch (err) {
        res.status(500).send('Erreur serveur');
    }
};
