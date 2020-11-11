import { Options, NewUser, loginUser } from '../utils/DataSchema';
import request from '../utils/requests';

export default class Profile {
    options: Options;
    constructor(options:Options){
        this.options = options;
        this.options.url = process.env.OCX_PROFILE_BASE_URL;
    }

    async register(data: NewUser){
        const requestOptions: Options = {
            ...this.options,
            data: data
        };
        let url = `auth/user/add`;
        return request(`POST`,url, requestOptions);

    }
}