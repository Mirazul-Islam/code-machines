// config.js
const crypto = require('crypto');

// Generate a secure JWT secret
const generateJwtSecret = () => {
    return crypto.randomBytes(64).toString('hex');
};

// Export the JWT secret
module.exports = {
    jwtSecret: generateJwtSecret()
};
