// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register a new user
router.post('/register', authController.registerUser);

// Log in and receive a JWT token
router.post('/login', authController.loginUser);

module.exports = router;
