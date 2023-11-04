const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

router.use('/', roomController);

module.exports = router;
