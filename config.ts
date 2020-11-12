require('dotenv').config()
const nodeEnv = process.env.NODE_ENV || 'development';

const API = {
    timeout: 1000000,
};

module.exports = API;