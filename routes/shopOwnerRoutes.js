// routes/shopOwnerRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const shopOwnerController = require('../controllers/shopOwnerController');

// Route to register a new shop listing (protected by authMiddleware)
router.post('/register', authMiddleware, shopOwnerController.registerShop);

module.exports = router;
