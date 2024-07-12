const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');
const Auth = require('../Controllers/Auth');

router.post('/new-user', UserController.createUser);
router.get('/all-users', UserController.getAllUsers); // Nouvelle route pour récupérer tous les utilisateurs
router.get('/:id', UserController.getUserById); // Route pour récupérer un utilisateur par ID
router.put('/:id', UserController.updateUser); // Route pour mettre à jour un utilisateur par ID
router.delete('/:id', UserController.deleteUser);// Route pour supprimer un utilisateur par ID

 //Authentication with JWT
router.post("/signup", Auth.signUP);
router.post("/signin", Auth.signIn);

module.exports = router;
