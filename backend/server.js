const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('ERROR: MONGODB_URI is not defined in .env file');
  process.exit(1);
}

console.log('Connecting to MongoDB Atlas...');

// Additional connection options for MongoDB Atlas
const mongooseOptions = {
  serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
};

const connection = mongoose.connect(MONGODB_URI, mongooseOptions)
.then(() => {
  console.log('MongoDB Atlas connected successfully');
  return mongoose.connection;
})
.catch(err => {
  console.error('MongoDB Atlas connection error:', err);
  console.error('Please check:');
  console.error('1. Your IP address is whitelisted in MongoDB Atlas');
  console.error('2. Your username and password are correct');
  console.error('3. Your cluster is active and running');
  process.exit(1);
});

// User Schema and Model
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  dateOfBirth: { type: Date, required: true }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

const User = mongoose.model('User', userSchema);

// Routes
app.post('/api/register', async (req, res) => {
  try {
    console.log('Received registration request:', req.body);
    const userData = req.body;
    
    // Validate required fields
    if (!userData.firstName || !userData.lastName || !userData.gender || 
        !userData.email || !userData.address || !userData.city || !userData.dateOfBirth) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    // Convert date string to Date object
    userData.dateOfBirth = new Date(userData.dateOfBirth);
    
    console.log('Creating user with data:', userData);
    const newUser = new User(userData);
    const savedUser = await newUser.save();
    console.log('User saved successfully:', savedUser);
    res.status(201).json({ message: 'User registered successfully', user: savedUser });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
});

// Health check route
app.get('/', (req, res) => {
  res.json({ message: 'Registration Backend Server is Running!' });
});

// Start server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  // Check if MongoDB is connected
  try {
    const db = await connection;
    console.log('Database connection status:', db.readyState === 1 ? 'Connected' : 'Disconnected');
  } catch (err) {
    console.error('Failed to verify database connection:', err);
  }
});