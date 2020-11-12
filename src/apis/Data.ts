import { Options, NewTable, NewHost,NewField } from '../utils/DataSchema';
import request from '../utils/requests';

export default class Data {
    options: Options;
    constructor(options:Options){
        this.options = options;
        this.options.url = process.env.OCX_DATA_BASE_URL
    }

     initData(payload: Object) {
        return {
            "OCX Schema": this.options.version,
            "OCXType": "Request",
            "OCXComponent": "OCXData",
            "OCXPayload": payload
        }
    }

    async setUp(domainId: String){
        let body = {
            domain_id:domainId
        }
        const requestOptions: Options = {
            ...this.options,
            data: this.initData(body)
        };
        let url = `host/create`;
        return request(`POST`,url, requestOptions);
    }


    async createHost(data: NewHost){
        let body = {
            host_data : data
        };
        const requestOptions: Options = {
            ...this.options,
            data: this.initData(body)
        };
        let url = `host/create`;
        return request(`POST`,url, requestOptions);

    }

    async getHosts(){
        const requestOptions: Options = {
            ...this.options,
        };
        let url = `host/retrieve`;
        return request(`GET`,url, requestOptions);
    }

    async createField(data: NewField, tableName: string){
        let body = {
            "table_name" : tableName,
            "field_data" : data
        };
        const requestOptions: Options = {
            ...this.options,
            data: this.initData(body)
        };

        let url = `field/create`;
        return request(`POST`,url, requestOptions);
    }

    async getFields(tableId : String){
        let body = {
            table_id: tableId
        };
        const requestOptions: Options = {
            ...this.options,
            data: this.initData(body)
        };
        let url = `field/retrieve`;
        return request(`POST`,url, requestOptions);
    }

    async createTable(data: NewTable){
        const requestOptions: Options = {
            ...this.options,
            data: this.initData(data)
        };
        let url = `table/create`;
        return request(`POST`,url, requestOptions);
    }

    async getTables(){
        const requestOptions: Options = {
            ...this.options,
        };
        let url = `table/retrieve`;
        return request(`GET`,url, requestOptions);
    }




}