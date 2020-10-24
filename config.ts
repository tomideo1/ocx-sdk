require('dotenv').config()
const nodeEnv = process.env.NODE_ENV || 'development';

const API = {
    timeout: 5000,
};

module.exports = API;