const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


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


//REQUIRE THE USER MODEL
const User = require('./models/User');

app.post('/api/register', async (req, res) => {
    try {
        //get the user data from the request body
        const { username, email, password, role } = req.body;
        //validate the user data
        if (!username || !email || !password) return res.status(400).json({ message: 'All fields are required' });

            const existingUser = await User.findOne({ $or: [{ username }, { email }] });
            if (existingUser) {
                return res.status(400).json({ message: 'Username or email already exists' });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({ 
                username, 
                email, 
                password: hashedPassword, 
                role });

        //send the response
        res.status(201).json({ message: 'User registered successfully', user });

    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


// login route
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: 'All fields are required' });

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'your account not found' });


        //match the password
        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) return res.status(400).json({ message: 'Invalid password' });
        
        res.status(200).json({ message: 'Login successful', user });
        
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

