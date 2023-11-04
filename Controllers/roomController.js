const express = require('express');
const router = express.Router();
const roomService = require('../services/roomServices');

router.get('/', roomService.listRooms);
router.post('/book', roomService.bookRoom);

module.exports = router;
