const  config = require('./config');
import  ocxMethods from './src/utils/utils'
import * as dataSchemas from './src/utils/DataSchema';
const objectAssignDeep = require(`object-assign-deep`);
/**
 * Initialize Sdk Instance
 */
export class Sdk { 

    options : dataSchemas.Options;

    /**
     * Initiate client instance
     * @param options Optional. Set options for HTTP requests
     */


    constructor(options?: dataSchemas.Options){
        const defaultOption = {
            headers: {},
            baseUrl : config.baseUrl,
            version: config.version,
            timeout: config.timeout,
            responseType: 'json',
        }
        this.options = objectAssignDeep({}, defaultOption, options);
        ocxMethods.checkCredentials(this.options)
    }

    init(){
       ocxMethods.checkCredentials(this.options)
       return 'Sdk Initialized....'
    }
}

// 99c570faf2d771289b840d6345367972546867a8
