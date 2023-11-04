// services/roomService.js

const Room = require('../models/Room'); // Import your Room model

// Function to list available rooms
const listRooms = async () => {
  try {
    // Retrieve a list of available rooms from your database
    const rooms = await Room.find({ isAvailable: true });

    // Filtering can be added here

    return rooms;
  } catch (error) {
    throw error; 
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



