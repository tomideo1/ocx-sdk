const config = require('./config');
import  ocxMethods from './src/apis/utils/utils'
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