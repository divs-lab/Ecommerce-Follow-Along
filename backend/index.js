const express = require('express');
const connectDB = require('./src/database/db');
const User = require('./src/models/userModel'); // You should create the User model
const app = express();

require('dotenv').config({
    path: './src/config/.env'
});

const PORT = process.env.port || 5000;
const url = process.env.db_url;

// Middleware to parse JSON request body
app.use(express.json());

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Hello World');
});

// API route to handle user sign-up
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user
        const newUser = new User({ name, email, password });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error during sign-up' });
    }
});

// Start the server
app.listen(PORT, async () => {
    try {
        await connectDB(url);
        console.log(`Server is running on port ${PORT}`);
    } catch (err) {
        console.log(err);
    }
});
