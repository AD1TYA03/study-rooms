// controllers/shopOwnerController.js

const Room = require('../models/Room');

// Function to register a new shop listing
const registerShop = async (req, res) => {
  try {
    const { shopName, location, capacity } = req.body;

    // Create a new shop listing
    const shop = new Shop({
      shopName,
      location,
      capacity,
      // Add other properties based on your requirements
    });

    // Save the shop listing to the database
    await Room.save();

    res.json({ message: 'Shop listing created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register the shop listing' });
  }
};

module.exports = {
  registerShop,
};
