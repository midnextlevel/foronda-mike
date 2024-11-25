const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes');
require('dotenv').config();

//Express app
const app = express();
const port = process.env.PORT||3000;
const mongodb = process.env.MONGODB_URI;

// Middleware
app.use(express.json());

//Connect to MongoDB
const connectToDatabase=async ()=>{
    try{
        await mongoose.connect(mongodb)
        console.log('Connected to MongoDB')
    }catch(error){
        console.error('Error connecting to MongoDB:', error);
    }
}

//routes
app.use('/todos',todoRoutes);


//start the server
app.listen(port,()=>{
    console.log(`Server is running in ${port}`);
    connectToDatabase();
});