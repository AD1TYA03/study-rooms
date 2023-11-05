const express = require('express');
const app = express();

// const authRoutes = require('./routes/authRoutes');
const roomRoutes = require('./routes/roomRoutes');
// const userRoutes = require('./routes/userRoutes');
const shopOwnerRoutes = require('./routes/shopOwnerRoutes');

app.use(express.json());

// app.use('/auth', authRoutes);
// app.use('/rooms', roomRoutes);
// app.use('/users', userRoutes);
app.use('/shop-owners', shopOwnerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
