import Data from "./src/apis/Data";

const  config = require('./config');
import  ocxMethods from './src/utils/utils'
import * as dataSchemas from './src/utils/DataSchema';
import Auth from './src/apis/Auth';
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
            headers: {
                client_id : process.env.OCX_CLIENT_ID,
                client_secret : process.env.OCX_CLIENT_SECRET
            },
            version: process.env.OCX_VERSION,
            timeout: config.timeout,
            responseType: 'json',
        }
        this.options = objectAssignDeep({}, defaultOption, options);
    }

    /**
     * Sdk Init
     */

    init(){
       return 'Sdk Initialized....'
    }

    /**
     * Auth registration ie. buy Auth Service
     * @param body Body of user
     * @param options Optional. Set options for HTTP requests
     */

    register(
        body: dataSchemas.NewUser,
        options?: dataSchemas.Options
    ){

        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Auth(requestOptions).register(body);

    }

    /**
     * Auth Login ie. buy Auth Service
     * @param body Body of loginUser
     * @param options Optional. Set options for HTTP requests
     */

    login(
        body: dataSchemas.loginUser,
        options?: dataSchemas.Options
    ){

        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Auth(requestOptions).login(body);

    }


    /**
     * Auth Login ie. buy Auth Service
     * @param body Body of loginUser
     * @param options Optional. Set options for HTTP requests
     */

    /**
     * get Authenticated Client User
     * @param options Optional. Set options for HTTP requests
     */

    getAuthUser(
        options?: dataSchemas.Options
    ){

        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Auth(requestOptions).getUser();

    }


    /**
     * Auth Create Client User  ie. buy Auth Service
     * @param body Body of NewUsers
     * @param options Optional. Set options for HTTP requests
     */

    async createAuthClientUser(
        body: dataSchemas.NewHost,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).createHost(body);
    }




    /**
     * Data Host Creation ie. buy Data  Service
     * @param body Body of hostData
     * @param options Optional. Set options for HTTP requests
     */

    async createDataHost(
        body: dataSchemas.NewHost,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).createHost(body);
    }


    /**
     * Data Table Creation ie. buy Data  Service
     * @param body Body of hostData
     * @param options Optional. Set options for HTTP requests
     */

    async createDataTable(
        body: dataSchemas.NewTable,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).createTable(body);
    }


    /**
     * Data Field Creation ie. buy Data  Service
     * @param body Body of hostData
     * @param options Optional. Set options for HTTP requests
     */

    async createDataFields(
        body: dataSchemas.NewField,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).createTable(body);
    }
}

