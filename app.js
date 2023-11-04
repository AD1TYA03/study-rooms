const express = require('express');
const app = express();

// const authRoutes = require('./routes/authRoutes');
const roomRoutes = require('./routes/roomRoutes');
// const userRoutes = require('./routes/userRoutes');

app.use(express.json());

// app.use('/auth', authRoutes);
app.use('/rooms', roomRoutes);
// app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
