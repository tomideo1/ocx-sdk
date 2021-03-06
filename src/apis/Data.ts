import {Options, NewTable, NewHost, NewField, NewQuery, GridLoader, DataConnection} from "../utils/DataSchema";
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



  async setUp(domainId: number) {
    const body = {
      domain_id: domainId
    };
    const requestOptions: Options = {
      ...this.options,
      data: this.initData(body)
    };
    const url = `setup`;
    // return this.initData(body);
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

  async updateHost(hostId: string, data:NewHost){
    const body = {
      host_id: hostId,
      host_data: data
    };
    const requestOptions: Options = {
      ...this.options,
      data: this.initData(body)
    }
    const url = `host/update`;
    return request(`POST`, url, requestOptions);
  }


  async deleteHost(hostId: string){
    const body = {
      host_id: hostId,
    };
    const requestOptions: Options = {
      ...this.options,
      data: this.initData(body)
    }
    const url = `host/delete`;
    return request(`POST`, url, requestOptions);
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




  async updateField(fieldId: string, data:NewField){
    const body = {
      field_id: fieldId,
      field_data: data
    };
    const requestOptions: Options = {
      ...this.options,
      data: this.initData(body)
    };

    const url = `field/update`;
    return request(`POST`, url, requestOptions);
  }

  async deleteField(fieldId: string){
    const body = {
      field_id: fieldId,
    };
    const requestOptions: Options = {
      ...this.options,
      data: this.initData(body)
    };
    const url = `field/delete`;
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

  async updateTable(tableId: string, data: NewTable){
    const body = {
      table_id: tableId,
      table_data: {table_name: data.table_name, visibility: data.visibility}
    };
    const requestOptions: Options = {
      ...this.options,
      data: this.initData(body)
    };
    const url = `table/update`;
    return request(`POST`, url, requestOptions);
  }

  async deleteTable(tableId: string){
    const body = {
      table_id: tableId,
    };
    const requestOptions: Options = {
      ...this.options,
      data: this.initData(body)
    };
    const url = `table/delete`;
    return request(`POST`, url, requestOptions);
  }

  async getTables() {
    const requestOptions: Options = {
      ...this.options
    };
    const url = `table/retrieve`;
    return request(`GET`, url, requestOptions);
  }



  async updateQuery(data: NewQuery){
    const queryBody = {
      "table_name": data.table_name,
      "where": [
        {"column": data.query, "operation": "=", "value": data.value}
      ],
      "data": data.queryPayload,
      "order": { "column": data.query, "operation": "asc" },
      "count": null as any
    }
    const requestOptions: Options = {
      ...this.options,
      data: this.initData(queryBody)
    };
    const url = `query/update`;
    return request(`POST`, url, requestOptions);
  }

  async fetchAllQuery(data:NewQuery){
    const queryBody = {
      "table_name": data.table_name,
      "where": [] as string[],
      "joins": [] as string[],
      "reverse_joins": [] as string[],
      "order": { "column": data.query, "operation": "asc" },
      "count": null as any,
      "pagination": null as any
    }
    const requestOptions: Options = {
      ...this.options,
      data: this.initData(queryBody)
    };
    const url = `query/retrieve`;
    return request(`POST`, url, requestOptions);
  }


  async urlGridLoad(data: GridLoader){
    const requestOptions: Options = {
      ...this.options,
      data: this.initData(data)
    };
    const url = `gridloader/load-url`;
    return request(`POST`, url, requestOptions);
  }

  async fileGridLoad(data: GridLoader){
    const requestOptions: Options = {
      ...this.options,
      data: this.initData(data)
    };
    const url = `gridloader/load-csv`;
    return request(`POST`, url, requestOptions);
  }


  async createDataConnection(data: DataConnection){
    const requestOptions: Options = {
      ...this.options,
      data: this.initData(data)
    };
    const url = `datapoint/create`;
    return request(`POST`, url, requestOptions);
  }

  async fetchDataConnections(){
    const requestOptions: Options = {
      ...this.options
    };
    const url = `datapoint/retrieve`;
    return request(`POST`, url, requestOptions);
  }

  async fetchSingleDataConnection(connectionId: string){
    const body = {
      id: connectionId
    };
    const requestOptions: Options = {
      ...this.options,
      data: this.initData(body)
    };
    const url = `datapoint/retrieveone`;
    return request(`POST`, url, requestOptions);
  }

  async updateDataConnection(connectionId: string, payload:DataConnection){
    const body = {
      id: connectionId,
      ...payload
    }

    const requestOptions: Options = {
      ...this.options,
      data: this.initData(body)
    };
    const url = `datapoint/update`;
    return request(`POST`, url, requestOptions);
  }


  async deleteDataConnection(connectionId: string){
    const body = {
      id: connectionId,
    }

    const requestOptions: Options = {
      ...this.options,
      data: this.initData(body)
    };
    const url = `datapoint/delete`;
    return request(`POST`, url, requestOptions);
  }
}
