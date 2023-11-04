// controllers/authController.js

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/auth'); // Import your JWT secret from the config

// Register a new user
exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  // Create a new user
  const user = new User({
    username,
    email,
    password, // Hash the password before saving it
  });

  try {
    await user.save();
    res.json({ message: 'Registration successful' });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed' });
  }
};

// Log in and generate a JWT token
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Verify the password (compare with the hashed password)
  if (password === user.password) {
    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, config.secret);

    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid password' });
  }
};
