import * as env from 'env-var';
const API = {
    baseUrl: 'sksksksk',
    timeout: 5000,
    clientId : 'ksksksksksksk',
    clientSecret : env.get('OCX_CLIENT_SECRET').asString(),
    
    version: 'v1'
};

module.exports = API;