// services/roomService.js

// Import your Room model
const Room = require('../models/Room');

// Function to list available rooms
const listRooms = async (req, res) => {
  try {
   
    const rooms = await Room.find({isAvailable: true});

    res.json(rooms);
  } catch (error) {
    console.error('Error listing rooms:', error);
    res.status(500).json({ error: 'Failed to list rooms' });
  }
};






const bookRoom = async () => {
    try {
        // Find the room by its ID
        const room = await Room.findById(roomId);
    
        if (!room) {
          throw new Error('Room not found');
        }
       
       
        // Check if the room is available for booking at the specified time
    if (!isRoomAvailable(room, bookingTime)) {
        throw new Error('Room is not available at the specified time');
      }

       // Update the room's availability status and add the booking details
    room.isAvailable = false;
    room.booking = {
      userId,
      bookingTime,
    };

    // Save the updated room to the database
    await room.save();

    // Return a success message or confirmation
    return 'Room booked successfully';    
}
catch (error) {
    throw error; // Handle or log the error as needed
  }
}

module.exports = {
  listRooms,
  bookRoom,
};



