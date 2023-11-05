const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true, // By default, a room is available
  },
 
});

// Create the Room model
const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
