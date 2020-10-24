import { Options, NewUser, User } from '../utils/DataSchema';
import request from '../utils/requests';

export default class Auth {
    options: Options;
    constructor(options:Options){
        this.options = options;
    }

    async register(data: NewUser){
        const requestOptions: Options = {
            ...this.options,
            data: data
        };
        let url = `user/add`;
        return request(`POST`,url, requestOptions);
  
    }
    async login(data: User){
        const requestOptions: Options = {
            ...this.options,
            data: data
        };
        let url = `${requestOptions.version}/login/token`;
        return request(`POST`,url, requestOptions);
    }
}