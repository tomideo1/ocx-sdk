import Data from "./src/apis/Data";

const  config = require('./config');
import  ocxMethods from './src/utils/utils'
import * as dataSchemas from './src/utils/DataSchema';
import Auth from './src/apis/Auth';
import Profile from "./src/apis/Profile";
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
     * AUTH SERVICES START
     */

    /**
     * Auth registration
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
     * Auth Login
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
     * Auth Login
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
        ocxMethods.checkCredentials(this.options)
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Auth(requestOptions).getUser();

    }


    /**
     * Auth Create Client User
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
     * AUTH SERVICES END
     */




    /**
     * DATA SERVICES START
     */

    /**
     * DB Initial  Setup
     * @param domainId
     * @param options Optional. Set options for HTTP requests
     */

    async setupDataChannels(
       domainId: String,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).setUp(domainId);
    }



    /**
     * Data Host Creation
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
     * Data Fetch All Data Hosts
     * @param options Optional. Set options for HTTP requests
     */

    async getDataHosts(
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).getHosts();
    }


    /**
     * Data Table Creation
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
     * Data Fetch All Data Tables
     * @param options Optional. Set options for HTTP requests
     */

    async getDataTables(
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).getTables();
    }


    /**
     * Data Field Creation
     * @param body Body of hostData
     * @param options Optional. Set options for HTTP requests
     */

    async createDataField(
        body: dataSchemas.NewField,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).createField(body);
    }


    /**
     * Data Fetch All Data Fields
     * @param tableId
     * @param options Optional. Set options for HTTP requests
     */

    async getDataFields(
        tableId: String,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).getFields(tableId);
    }

    /**
     * DATA SERVICES END
     */





    /**
     * PROFILE SERVICES START
     */

    /**
     * Profile Type Creation
     * @param body Body of ProfileType
     * @param options Optional. Set options for HTTP requests
     */

    async createProfileType(
        body: dataSchemas.ProfileType,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Profile(requestOptions).createProfileType(body);
    }

    /**
     * Data Fetch All Profile Types
     * @param options Optional. Set options for HTTP requests
     */

    async getProfileTypes(
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Profile(requestOptions).getProfileTypes();
    }


    /**
     * Profile Field Creation
     * @param body Body of ProfileFields
     * @param options Optional. Set options for HTTP requests
     */

    async createProfileField(
        body: dataSchemas.ProfileFields,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Profile(requestOptions).createProfileFields(body);
    }

    /**
     * Data Fetch All Profile Fields
     * @param options Optional. Set options for HTTP requests
     */

    async getProfileFields(
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Profile(requestOptions).getProfileFields();
    }



    /**
     * Profile Records Creation
     * @param body Body of ProfileRecords
     * @param options Optional. Set options for HTTP requests
     */

    async createProfileRecords(
        body: dataSchemas.ProfileRecords,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Profile(requestOptions).createProfileRecords(body);
    }

    /**
     * Data Fetch All Profile Records
     * @param options Optional. Set options for HTTP requests
     */

    async getProfileRecords(
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Profile(requestOptions).getProfileRecords();
    }



    /**
     * PROFILE SERVICES END
     */



}

