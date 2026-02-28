const User = require ("../models/User");
const bcrypt = require ("bcrypt");
const jwt = require("jsonwebtoken") ;

JWT_SECRET = process.env.JWT_SECRET || "MazeSecretKey" ;
const createUser = async (req ,res) => {
    try {
        const { username , password } = req.body ;
        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" }) ;
        }
        const user = new User({ username , password }) ;
        await user.save();
        res.status(201).json({ message: "User created successfully" }) ;
    } catch (error) {
        res.status(500).json({ message: "Error creating user" }) ;
    }
};

const getUser = async(req ,res) => {
    try {
        const users = await User.find() ;
        res.status(200).json({ data: users }) ;
    } catch (error) {
        res.status(500).json({ message: "Error fetching users" }) ;
    }
};

const loginUser = async(req ,res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: 'All fields are required' });

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'your account not found' });
        // added jwt token here
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        
        //match the password
        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) return res.status(400).json({ message: 'Invalid password' });
        
        res.status(200).json({ message: 'Login successful', user });
        
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createUser , getUser , loginUser } ; 
