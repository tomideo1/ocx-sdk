import Data from "./src/apis/Data";
/* tslint:disable */
const  config = require('./config');
import  ocxMethods from './src/utils/utils'
import * as dataSchemas from './src/utils/DataSchema';
import Auth from './src/apis/Auth';
import Profile from "./src/apis/Profile";
import Access from "./src/apis/Access";
import Domain from "./src/apis/Domain";
import {DomainGroup, NewDomain} from "./src/utils/DataSchema";
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
                clientId: process.env.OCX_CLIENT_ID || process.env.VUE_APP_OCX_CLIENT_ID,
                clientSecret: process.env.OCX_CLIENT_SECRET || process.env.VUE_APP_OCX_CLIENT_SECRET
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


    async updateAuthUser(
        userId: string,
        body: dataSchemas.NewUser,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Auth(requestOptions).updateUser(userId,body);
    }


    getAllAuthUsers(
        options?: dataSchemas.Options
    ) {
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Auth(requestOptions).fetchUsers();

    }


    async createAuthRole(
        body: dataSchemas.NewRole,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Auth(requestOptions).createRole(body);
    }

    async updateAuthRole(
        roleId: string,
        body: dataSchemas.NewRole,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Auth(requestOptions).updateRole(roleId,body);
    }

    async deleteAuthRole(
        roleId: string,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Auth(requestOptions).deleteRole(roleId);
    }




    async createAuthGroup(
        body: dataSchemas.NewGroup,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Auth(requestOptions).createGroup(body);
    }


    async updateAuthGroup(
        groupId: string,
        body: dataSchemas.NewRole,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Auth(requestOptions).updateGroup(groupId,body);
    }

    async deleteAuthGroup(
        groupId: string,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Auth(requestOptions).deleteGroup(groupId);
    }



    getAllAuthRoles(
        options?: dataSchemas.Options
    ) {
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Auth(requestOptions).fetchRoles();

    }


    getAllAuthGroups(
        options?: dataSchemas.Options
    ) {
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Auth(requestOptions).fetchGroups();

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






    async updateDataHost(
        hostId: string,
        body: dataSchemas.NewHost,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).updateHost(hostId,body);
    }

    async deleteDataHost(
        hostId: string,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).deleteHost(hostId);
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

    async updateDataTable(
        tableId: string,
        body: dataSchemas.NewTable,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).updateTable(tableId,body);
    }



    async deleteDataTable(
        tableId: string,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).deleteTable(tableId);
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

    async updateDataField(
        fieldId: string,
        body: dataSchemas.NewField,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).updateField(fieldId,body);
    }

    async deleteDataField(
        fieldId: string,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).deleteField(fieldId);
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
     * Data Field Creation
     * @param body Body of hostData
     * @param options Optional. Set options for HTTP requests
     */


    async dataUpdate(
        body: dataSchemas.NewQuery,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).updateQuery(body);
    }


    async dataFetchAll(
        body: dataSchemas.NewQuery,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).fetchAllQuery(body);
    }


    async DataGridLoadUrl(
        body: dataSchemas.GridLoader,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).urlGridLoad(body);
    }

    async DataGridLoadFile(
        body: dataSchemas.GridLoader,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).fileGridLoad(body);
    }

    async createDataConnection(
        body: dataSchemas.DataConnection,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).createDataConnection(body);
    }

    async dataFetchConnection(
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).fetchDataConnections();
    }

    async dataFetchSingleConnection(
        connectionId: string,
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).fetchSingleDataConnection(connectionId);
    }


    async dataUpdateConnection(
        connectionId: string,
        body: dataSchemas.DataConnection,
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).updateDataConnection(connectionId,body);
    }

    async datadeleteConnection(
        connectionId: string,
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Data(requestOptions).deleteDataConnection(connectionId);
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


    async getSingleProfileType(
        profileId: string,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Profile(requestOptions).getSingleProfile(profileId);
    }

    async updateProfileType(
        profileId: string,
        body: dataSchemas.ProfileType,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Profile(requestOptions).updateProfileType(profileId,body);
    }

    async deleteProfileType(
        profileId: string,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Profile(requestOptions).deleteProfileType(profileId);
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

    async updateProfileField(
        fieldId: string,
        body: dataSchemas.ProfileFields,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Profile(requestOptions).updateProfileField(fieldId,body);
    }

    async deleteProfileField(
        fieldId: string,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Profile(requestOptions).deleteProfileField(fieldId);
    }

    /**
     * Data Fetch All Profile Fields
     * @param fieldId
     * @param options Optional. Set options for HTTP requests
     */

    async getSingleProfileField(
        fieldId: string,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Profile(requestOptions).getSingleProfileField(fieldId);
    }

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

    async updateProfileRecords(
        profileRecordId:string,
        body: dataSchemas.ProfileRecords,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Profile(requestOptions).updateProfileRecord(profileRecordId,body);
    }



    async getSingleProfileRecord(
        profileRecordId:string,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Profile(requestOptions).getSingleProfileRecord(profileRecordId);
    }

    async deleteProfileRecord(
        profileRecordId:string,
        options?: dataSchemas.Options
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Profile(requestOptions).deleteProfileRecord(profileRecordId);
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
     * Access Service Create Routes
     * @param options Optional. Set options for HTTP requests
     * @param body Body for a new Access Service Request Registration
     */

    async AccessCreateRoute(
        body: dataSchemas.NewRequest,
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Access(requestOptions).registerRoute(body);
    }

    /**
     * Access Service Fetch Routes
     * @param options Optional. Set options for HTTP requests
     * @param body Body for a new Access Service Request Registration
     */

    async AccessFetchRoutes(
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Access(requestOptions).getRoutes();
    }


    async AccessFetchSingleRoute(
        routeId: string,
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Access(requestOptions).fetchSingleRoute(routeId);
    }

    async AccessUnregisterRoute(
        routeId: string,
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Access(requestOptions).unRegisterRoute(routeId);
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


    async DomainCreateNode(
        body : dataSchemas.NewDomain,
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Domain(requestOptions).createDomainNode(body);
    }


    async DomainAcceptNode(
        body : dataSchemas.NewDomain,
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Domain(requestOptions).acceptDomainNode(body);
    }


    async DomainFetchNodes(
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Domain(requestOptions).getDomainNodes();
    }

    async DomainFetchSingleNode(
        NodeId: string,
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Domain(requestOptions).getSingleDomainNode(NodeId);
    }


    async DomainUpdateNode(
        NodeId: string,
        body: NewDomain,
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Domain(requestOptions).updateDomainNode(NodeId,body);
    }


    async DomainDeleteNode(
        NodeId: string,
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Domain(requestOptions).deleteDomainNode(NodeId);
    }

    async DomainInvite(
        body: dataSchemas.DomainInvitee,
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Domain(requestOptions).createDomainInvite(body);
    }

    async DomainFetchInvitations(
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Domain(requestOptions).getDomainInvitation();
    }

    async DomainFetchSingleInvitation(
        inviteId: string,
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Domain(requestOptions).getSingleDomainInvite(inviteId);
    }




    async DomainCreateGroup(
        body : DomainGroup,
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Domain(requestOptions).createDomainGroup(body);
    }



    async DomainFetchGroups(
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Domain(requestOptions).getDomainGroups();
    }

    async DomainFetchSingleGroup(
        GroupId: string,
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Domain(requestOptions).getSingleDomainGroup(GroupId);
    }


    async DomainUpdateGroup(
        groupId: string,
        body: DomainGroup,
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Domain(requestOptions).updateDomainGroup(groupId,body);
    }


    async DomainDeleteGroup(
        groupId: string,
        options?: dataSchemas.Options,
    ){
        ocxMethods.checkCredentials(this.options)
        const requestOptions = objectAssignDeep({}, this.options, options);
        return new Domain(requestOptions).deleteDomainGroup(groupId);
    }




    /**
     * Domain Service Create Host 
     * @param options Optional. Set options for HTTP requests
     * @param body Body for a new Domain  Host 
     */



    
    
    
    
    /**
     * Domain Services Start
     */



}

