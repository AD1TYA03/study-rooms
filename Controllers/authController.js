const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
require('dotenv').config();
const secretKey = process.env.JWT_SECRET;

// Callback function for user registration
const registerUser = async (req, res) => {
  const { username, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const user = new User({ username, password: hashedPassword });

  // Save the user to the database
  await user.save();

  res.json({ message: 'User registered successfully' });
};

// Callback function for user login
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  // Compare the provided password with the stored hash
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  // Generate a JWT
  const token = jwt.sign({ userId: user._id }, secretKey);

  res.json({ token });
};

module.exports = {
    registerUser,
    loginUser,
  };

