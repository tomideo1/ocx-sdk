import { Options, ProfileType, ProfileRecords,ProfileFields } from '../utils/DataSchema';
import request from '../utils/requests';

export default class Profile {
    options: Options;
    constructor(options:Options){
        this.options = options;
        this.options.url = process.env.OCX_PROFILE_BASE_URL;
    }

    async createProfileType(data: ProfileType){
        const requestOptions: Options = {
            ...this.options,
            data: data
        };
        let url = `ProfileType/add/profiletypes`;
        return request(`POST`,url, requestOptions);

    }

    async getProfileTypes(){
        const requestOptions: Options = {
            ...this.options,
        };
        let url = `table/retrieve`;
        return request(`GET`,url, requestOptions);
    }
}