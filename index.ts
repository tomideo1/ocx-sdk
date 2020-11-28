import Data from "./src/apis/Data";
/* tslint:disable */
const  config = require('./config');
import  ocxMethods from './src/utils/utils'
import * as dataSchemas from './src/utils/DataSchema';
import Auth from './src/apis/Auth';
import Profile from "./src/apis/Profile";
import Access from "./src/apis/Access";
import Domain from "./src/apis/Domain";
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
                "client-id ": process.env.OCX_CLIENT_ID || process.env.VUE_APP_OCX_CLIENT_ID,
                "client-secret ": process.env.OCX_CLIENT_SECRET || process.env.VUE_APP_OCX_CLIENT_SECRET
            },
            version: process.env.OCX_VERSION || process.env.VUE_APP_OCX_VERSION,
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

        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Auth(requestOptions).register(body);

    }

    /**
     * Auth Login
     * @param body Body of LoginUser
     * @param options Optional. Set options for HTTP requests
     */

    login(
        body: dataSchemas.LoginUser,
        options?: dataSchemas.Options
    ){

        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Auth(requestOptions).login(body);

    }


    /**
     * Auth Login
     * @param body Body of LoginUser
     * @param options Optional. Set options for HTTP requests
     */

    /**
     * get Authenticated Client User
     * @param options Optional. Set options for HTTP requests
     * @param userId number. the id of the User
     */

    showUser(
        userId : number,
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Auth(requestOptions).showUser(userId);

    }
    /**
     * get Authenticated Client User
     * @param options Optional. Set options for HTTP requests
     */

    getAuthUser(
        options?: dataSchemas.Options
    ) {
     ocxMethods.checkCredentials(this.options)
    const requestOptions = objectAssignDeep({}, this.options, options);
    return new Auth(requestOptions).getAuthenticatedUser();
        
    }


    /**
     * Auth Create Client User
     * @param body Body of NewUsers
     * @param options Optional. Set options for HTTP requests
     */

    async createAuthClientUser(
        body: dataSchemas.NewUser,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Auth(requestOptions).createUser(body);
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
        domainId: number,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
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
        const requestOptions = objectAssignDeep({}, this.options, options);
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
        const requestOptions = objectAssignDeep({}, this.options, options);
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
        const requestOptions = objectAssignDeep({}, this.options, options);
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
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).getTables();
    }


    /**
     * Data Field Creation
     * @param body Body of hostData
     * @param tableName
     * @param options Optional. Set options for HTTP requests
     */

    async createDataField(
        body: dataSchemas.NewField,
        tableName: string,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).createField(body,tableName);
    }


    /**
     * Data Fetch All Data Fields
     * @param tableId
     * @param options Optional. Set options for HTTP requests
     */

    async getDataFields(
        tableId: string,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).getFields(tableId);
    }

    /**
     * DATA SERVICES END
     */





    /**
     * PROFILE SERVICES START
     */

    
    /**
     * Setup Profile
    * @param options Optional. Set options for HTTP requests
     */

    async profileInit(
         options?: dataSchemas.Options
    ) {
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Profile(requestOptions).setupProfile();
        
    }

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
        const requestOptions = objectAssignDeep({}, this.options, options);
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
        const requestOptions = objectAssignDeep({}, this.options, options);
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
        const requestOptions = objectAssignDeep({}, this.options, options);
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
        const requestOptions = objectAssignDeep({}, this.options, options);
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
        const requestOptions = objectAssignDeep({}, this.options, options);
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
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Profile(requestOptions).getProfileRecords();
    }
    /**
     * Profile Data Creation
     * @param body Body of ProfileData
     * @param options Optional. Set options for HTTP requests
     */

    /**
     * PROFILE SERVICES END
     */

    

    /**
     * Acess Services Start
     */

    
    /**
     * Access Service Rollback 
     * @param options Optional. Set options for HTTP requests
     */

    async AccessrollBack(
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Access(requestOptions).rollbackAccess();
    }

    /**
     * Access Service Setup 
     * @param options Optional. Set options for HTTP requests
     */

    async AccessSetup(
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Access(requestOptions).setupAccess();
    }



    /**
     * Access Service Create Request 
     * @param options Optional. Set options for HTTP requests
     * @param body Body for a new Access Service Request Registration
     */

    async AccessCreateRequest(
        body: dataSchemas.NewRequest,
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Access(requestOptions).registerRequest(body);
    }


    /**
     * Access Service Unregister Request 
     * @param options Optional. Set options for HTTP requests
     * @param body Body for a new Access Service Request Registration
     */

    async AccessUnregisterRequest(
        body: dataSchemas.NewRequest,
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Access(requestOptions).unRegisterRequest(body);
    }
    
     /**
     * Access Services End
     */

    
    
    /**
     * Domain Services Start
     */

    
    /**
     * Domain Service Setup Tb;e 
     * @param options Optional. Set options for HTTP requests
     */

    async DomainSetup(
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Domain(requestOptions).setupDomain();
    }


    /**
     * Domain Service Create Host 
     * @param options Optional. Set options for HTTP requests
     * @param body Body for a new Domain  Host 
     */

    async DomainCreateHost(
        body: dataSchemas.NewDomain,
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Domain(requestOptions).newDomainHost(body);
    }

    /**
     * Domain Service Create Host 
     * @param options Optional. Set options for HTTP requests
     * @param body Body for a new Sub Domain Host 
     */

    async DomainCreateSubDomainHost(
        body: dataSchemas.SubDomain,
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Domain(requestOptions).createSubDomainRecord(body);
    }


    /**
     * Domain Service Fetch All  Host 
     * @param options Optional. Set options for HTTP requests
     */

    async DomainFetchAllHosts(
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Domain(requestOptions).fetchDomainHosts();
    }


    /**
     * Domain Service Fetch All Sub Domain Records 
     * @param options Optional. Set options for HTTP requests
     */

    async DomainFetchAllSubDomainHosts(
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Domain(requestOptions).fetchSubDomainRecords();
    }

    
    
    
    
    
    
    /**
     * Domain Services Start
     */



}

