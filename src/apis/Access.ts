import { Options, NewRequest } from "../utils/DataSchema";
import request from "../utils/requests";

export default class Access {

    options: Options;
  constructor(options: Options) {
    this.options = options;
    this.options.url = process.env.OCX_ACCESS_BASE_URL || process.env.VUE_APP_OCX_ACCESS_BASE_URL;
  }
    
    
  initData(payload: object) {
    return {
      "OCX Schema": this.options.version,
      "OCXType": "Request",
      "OCXComponent": "OCXData",
      "OCXPayload": payload
    };
  }
    
    async setupAccess() {
        const requestOptions: Options = {
      ...this.options
    };
    const url = `access/${this.options.version}/setup`;
    return request(`POST`, url, requestOptions);
    }
    
      async rollbackAccess() {
        const requestOptions: Options = {
      ...this.options
    };
    const url = `access/${this.options.version}/setup/rollback`;
    return request(`POST`, url, requestOptions);
    }

    async registerRequest(data: NewRequest) {
        const requestOptions: Options = {
            ...this.options,
            data: this.initData(data)
    };
    const url = `access/${this.options.version}/routes/register`;
    return request(`POST`, url, requestOptions);
    }

    async getAccess() {
            const requestOptions: Options = {
      ...this.options
    };
    const url = `access/${this.options.version}/routes/access`;
    return request(`GET`, url, requestOptions);
    }

    async unRegisterRequest(data: NewRequest) {
        const requestOptions: Options = {
            ...this.options,
            data: this.initData(data)
    };
    const url = `access/${this.options.version}/routes/register`;
    return request(`POST`, url, requestOptions);
    }
}