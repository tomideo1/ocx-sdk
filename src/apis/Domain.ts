import { NewDomain, SubDomain, Options } from './../utils/DataSchema';
import request from '../utils/requests';

export default class Domain {
    options: Options;
    constructor(options: Options) {
        this.options = options;
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


    async createSubDomainRecord(data:SubDomain) {
        const requestOptions: Options = {
            ...this.options,
            data
        }
        const url = `api/v1/domain-access/create`;
         return request(`POST`, url, requestOptions);
    }

    async fetchSubDomainRecords() {
        const requestOptions: Options = {
      ...this.options
    };
    const url = `api/v1/domain-access/fetch/`;
    return request(`GET`, url, requestOptions);
    }
}