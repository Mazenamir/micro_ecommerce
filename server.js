const express = require('express');
const mongoose = require('mongoose');


// Create Express app
const app = express();
const port = 5000;

//creare the api
app.use(express.json());

// Connect to MongoDB

async function dbconnect() {
    if (mongoose.connection.readyState >= 1) {  
        console.log('MongoDB done');
        return;
    }
    try {
        await mongoose.connect('mongodb://localhost:27017/micro');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

dbconnect();


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

