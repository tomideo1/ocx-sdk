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
        let url = `ProfileType`;
        return request(`GET`,url, requestOptions);
    }

    async createProfileRecords(data: ProfileRecords){
        const requestOptions: Options = {
            ...this.options,
            data: data
        };
        let url = `ProfileRecord/add/profilerecords`;
        return request(`POST`,url, requestOptions);
    }

    async getProfileRecords(){
        const requestOptions: Options = {
            ...this.options,
        };
        let url = `ProfileRecord`;
        return request(`GET`,url, requestOptions);
    }

    async createProfileFields(data: ProfileFields){
        const requestOptions: Options = {
            ...this.options,
            data: data
        };
        let url = `ProfileRecord/add/profilerecords`;
        return request(`POST`,url, requestOptions);
    }


    async getProfileFields(){
        const requestOptions: Options = {
            ...this.options,
        };
        let url = `ProfileField/add/profilefields`;
        return request(`GET`,url, requestOptions);
    }
}