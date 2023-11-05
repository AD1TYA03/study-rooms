const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();
const secretKey = process.env.SECRET_KEY;

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ error: 'Token not provided' });
  }

  jwt.verify(token, secretKey, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    // Fetch the user based on the user ID stored in the token
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    // Attach the user to the request for further use
    req.user = user;
    next();
  });
};

// Example protected route
app.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'This route is protected and only accessible with a valid token' });
});
