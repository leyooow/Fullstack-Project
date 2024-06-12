const express = require('express');
const userController = require('../controllers/userController.js');
const router = express.Router();
const authenticateToken  = require('../middlewares/JWTAuthentication')

router.post('/createUser',  authenticateToken, userController.createUser);
router.get('/getAllUsers', userController.getAllUsers);
router.get('/getAllUserById/:id', userController.getUserById);
router.put('/updateUser/:id', userController.updateUser);
router.delete('/deleteUser/:id', userController.deleteUser);

module.exports = router;
