const API = {
    baseUrl: process.env.OCX_BASE_URL,
    timeout: 5000,
    clientId : process.env.OCX_CLIENT_ID,
    clientSecret : process.env.OCX_CLIENT_ID,
    
    version: 'v1'
};

module.exports = API;