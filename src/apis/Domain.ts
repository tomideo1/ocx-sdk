import { NewDomain, subDomain, Options } from './../utils/DataSchema';
import request from '../utils/requests';

export default class Domain {
    options: Options;
    constructor(Options: Options) {
        this.options = this.options;
        this.options.url = process.env.OCX_DOMAIN_BASE_URL || process.env.VUE_APP_OCX_DOMAIN_BASE_URL;
    }


    async newDomainHost(data: NewDomain) {
        const requestOptions: Options = {
            ...this.options,
            data
        }
        const url = `api/v1/domain-host/create`;
         return request(`POST`, url, requestOptions);
    }

    async fetchDomainHosts() {
        
    const requestOptions: Options = {
      ...this.options
    };
    const url = `api/v1/domain-host/fetch`;
    return request(`GET`, url, requestOptions);
    }
}