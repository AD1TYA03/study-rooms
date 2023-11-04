const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    UseUnifiedTypology: true,
});

mongoose.connection.on('error', (err)=>{
    console.error(`MongoDB connection error: ${err}`);
});