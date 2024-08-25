const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/authMiddleware');


// Définir les routes CRUD pour les utilisateurs
router.get('/',  userController.getAllUsers);
router.get('/:id', auth, userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', auth, userController.updateUser);
router.delete('/:id', auth, userController.deleteUser);

router.post('/login', userController.loginUser);

module.exports = router;
