const express = require('express');
const router = express.Router();

const authService = require('../services/authServices');
const authValidator = require('../Validators/authValidator');