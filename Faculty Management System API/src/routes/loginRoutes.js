const express = require('express');
const loginController = require('../controllers/loginController');
const router = express.Router();


router.post('/loginAuth', loginController.loginAuth);


module.exports = router;
