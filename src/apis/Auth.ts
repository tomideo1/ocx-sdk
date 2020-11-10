import { Options, NewUser, loginUser } from '../utils/DataSchema';
import request from '../utils/requests';

export default class Auth {
    options: Options;
    constructor(options:Options){
        this.options = options;
        this.options.url = process.env.OCX_AUTH_BASE_URL
    }

    async register(data: NewUser){
        const requestOptions: Options = {
            ...this.options,
            data: data
        };
        let url = `auth/user/add`;
        return request(`POST`,url, requestOptions);
  
    }
    async login(data: loginUser){
        data.client_id = this.options.headers?.client_id;
        data.client_secret = this.options.headers?.client_secret;
        const requestOptions: Options = {
            ...this.options,
            data: data
        };
        let url = `auth/login/token`;
        return request(`POST`,url, requestOptions);
    }

    async createUser(data:NewUser){

    }
}