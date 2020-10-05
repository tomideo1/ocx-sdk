const config = require('./config');

/**
 * Initialize Sdk Instance
 */
export class Sdk { 


    constructor(){
        const defaultOption = {
            headers: {},
            baseUrl : config.baseUrl,
            version: config.version,
            timeout: config.timeout,
            responseType: 'json'
        }
    }
}