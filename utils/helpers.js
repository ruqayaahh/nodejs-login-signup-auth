const jwt = require('jsonwebtoken');
require('dotenv').config();

// sassigning a token to the

const jwtSecret = process.env.JWT_SECRET;

const addDataToToken = (data) => jwt.sign(data, jwtSecret, { expiresIn: '1h' });

const verifyToken = (token) => jwt.verify(token, jwtSecret);

module.exports = { addDataToToken, verifyToken };

// we have to verify the token is valid
