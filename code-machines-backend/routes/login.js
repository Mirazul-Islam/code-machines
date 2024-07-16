const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/secret'); // Import the JWT secret
const db = require('../config/db');
const User = require('../models/user');


router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ success: false, message: 'username is not valid' });
    }

    // Check password
    if (user.password !== password) {
      return res.status(401).json({ success: false, message: 'incorrect password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id, username: user.username }, jwtSecret);

    console.log("user");

    // Authentication successful
    res.json({ success: true, message: 'Login successful', username: user.username, email: user.email, token });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }

});

module.exports = router;
