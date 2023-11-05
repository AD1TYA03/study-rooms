// controllers/shopOwnerController.js

const Room = require('../models/Room');

// Function to register a new shop listing
const registerShop = async (req, res) => {
  const { name, location, capacity , isAvailable } = req.body;
  try {
    (isAvailable==false)?isAvailable=false:isAvailable=true;

    // Create a new shop listing
    const room = new Room({
      name,
      location,
      capacity,
      isAvailable,
      
    });

    // Save the shop listing to the database
    await room.save();

    res.json({ message: `Shop listing created successfully ${req.body}` });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register the shop listing' });
  }
};

module.exports = {
  registerShop,
};






