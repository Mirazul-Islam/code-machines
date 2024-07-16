const express = require('express');
const router = express.Router();

const db = require('../config/db');
const User = require('../models/user');
  
// Create a new user
router.post('/register', async (req, res) => {
    const { username, password, email  } = req.body;
  
    try {
      const user = new User({ username, password, email });
      await user.save();
      res.json({ success: true, message: 'Registration successful' });
      // res.send(user);

    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });

module.exports = router;
