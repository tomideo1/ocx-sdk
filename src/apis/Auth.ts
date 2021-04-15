import {Options, NewUser, LoginUser, NewGroup, NewRole} from "../utils/DataSchema";
import request from "../utils/requests";

export default class Auth {
  options: Options;
  constructor(options: Options) {
    this.options = options;
    this.options.url = process.env.OCX_AUTH_BASE_URL || process.env.VUE_APP_OCX_AUTH_BASE_URL;
  }

  async register(data: NewUser) {
    const requestOptions: Options = {
      ...this.options,
      data
    };
    const url = `auth/user/add`;
    return request(`POST`, url, requestOptions);
  }

  async registerClientUser(data: NewUser) {
    const requestOptions: Options = {
      ...this.options,
      data
    };
    const url = `auth/user/add`;
    return request(`POST`, url, requestOptions);
  }
  async login(data: LoginUser) {
    data.client_id = parseInt(process.env.PASSPORT_CLIENT_ID as string,10) || parseInt(process.env.VUE_APP_PASSPORT_CLIENT_ID as string,10)
    data.client_secret = process.env.PASSPORT_CLIENT_SECRET || process.env.VUE_APP_PASSPORT_CLIENT_SECRET;
    data.grant_type = "password",
    data.scope = "";
    const requestOptions: Options = {
      ...this.options,
      data
    };
    const url = `auth/login/token`;
    return request(`POST`, url, requestOptions);
  }

  async showUser(userId:number) {

    const requestOptions: Options = {
      ...this.options
    };
    const url = `auth/user/get/${userId}`;
    return request(`GET`, url, requestOptions);
    
  }

  async fetchUsers(){
    const requestOptions: Options = {
      ...this.options
    };
    const url = `auth/user/get`;
    return request(`GET`, url, requestOptions);
  }

  async getAuthenticatedUser() {
    
    const requestOptions: Options = {
      ...this.options
    };
    const url = `auth/client/verify`;
    return request(`GET`, url, requestOptions);
  }

  async createUser(data: NewUser) {
    const requestOptions: Options = {
      ...this.options,
      data
    };
    const url = `auth/client`;
    return request(`POST`, url, requestOptions);
  }

  async createGroup(data: NewGroup){
    const requestOptions: Options = {
      ...this.options,
      data
    };
    const url = `groups/add`;
    return request(`POST`, url, requestOptions);
  }

  async fetchGroups(){
    const requestOptions: Options = {
      ...this.options
    };
    const url = `auth/groups`;
    return request(`GET`, url, requestOptions);
  }



  async createRole(data: NewRole){
    const requestOptions: Options = {
      ...this.options,
      data
    };
    const url = `roles/add`;
    return request(`POST`, url, requestOptions);
  }

  async fetchRoles(){
    const requestOptions: Options = {
      ...this.options
    };
    const url = `auth/roles`;
    return request(`GET`, url, requestOptions);
  }
}
