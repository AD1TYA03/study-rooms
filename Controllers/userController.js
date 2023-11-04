const express = require('express');
const router = express.Router();
const userService = require('../services/userServices');

router.get('/profile', userService.getUserProfile);
router.get('/bookings', userService.getUserBookings);

module.exports = router;
