import { Options, NewTable, NewHost, NewField } from "../utils/DataSchema";
import request from "../utils/requests";

export default class Data {
  options: Options;
  constructor(options: Options) {
    this.options = options;
    this.options.url = process.env.OCX_DATA_BASE_URL || process.env.VUE_APP_OCX_DATA_BASE_URL;
  }

  initData(payload: object) {
    return {
      "OCX Schema": this.options.version,
      "OCXType": "Request",
      "OCXComponent": "OCXData",
      "OCXPayload": payload
    };
  }

  async setUp(domainId: string) {
    const body = {
      domain_id: domainId
    };
    const requestOptions: Options = {
      ...this.options,
      data: this.initData(body)
    };
    const url = `host/create`;
    return request(`POST`, url, requestOptions);
  }

  async createHost(data: NewHost) {
    const body = {
      host_data: data
    };
    const requestOptions: Options = {
      ...this.options,
      data: this.initData(body)
    };
    const url = `host/create`;
    return request(`POST`, url, requestOptions);
  }

  async getHosts() {
    const requestOptions: Options = {
      ...this.options
    };
    const url = `host/retrieve`;
    return request(`GET`, url, requestOptions);
  }

  async createField(data: NewField, tableName: string) {
    const body = {
      table_name: tableName,
      field_data: data
    };
    const requestOptions: Options = {
      ...this.options,
      data: this.initData(body)
    };

    const url = `field/create`;
    return request(`POST`, url, requestOptions);
  }

  async getFields(tableId: string) {
    const body = {
      table_id: tableId
    };
    const requestOptions: Options = {
      ...this.options,
      data: this.initData(body)
    };
    const url = `field/retrieve`;
    return request(`POST`, url, requestOptions);
  }

  async createTable(data: NewTable) {
    const requestOptions: Options = {
      ...this.options,
      data: this.initData(data)
    };
    const url = `table/create`;
    return request(`POST`, url, requestOptions);
  }

  async getTables() {
    const requestOptions: Options = {
      ...this.options
    };
    const url = `table/retrieve`;
    return request(`GET`, url, requestOptions);
  }
}
