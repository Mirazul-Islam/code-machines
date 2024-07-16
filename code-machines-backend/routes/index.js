const express = require('express');
const router = express.Router();

const loginRoutes = require('./login');
const registerRoutes = require('./register');

router.use('/api', loginRoutes);
router.use('/api', registerRoutes);

module.exports = router;
