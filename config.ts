require('dotenv').config()
const nodeEnv = process.env.NODE_ENV || 'development';

// if(nodeEnv === 'development' || nodeEnv === 'staging'){
//     dotenv.config
// }
const API = {
    baseUrl: process.env.OCX_BASE_URL,
    timeout: 5000,
    clientId : process.env.OCX_CLIENT_ID,
    clientSecret :  process.env.OCX_CLIENT_ID,
    
    version: 'v1'
};

module.exports = API;