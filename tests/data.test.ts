import { Sdk } from '../';
const config = require('../config');

const sdk = new Sdk();
const DOMAIN_ID =  2
const HostData =   {
    "domain_id": 1,
    "host_name": "TomideMobileHost",
    "host": "127.0.0.1",
    "port": 3306,
    "driver": "mysql",
    "database": "ocx-test",
    "username": "root",
    "password": null
};

const newtable = {
    "database_type": "default",
    "host_name": "default",
    "table_name": "tomide_table",
    "visibility": true,
    "fields": [
        {
            "field_name": "company_id",
            "field_type": "unsigned_integer",
            "visibility": true,
            "nullable": false
        },
        {
            "field_name": "firstname",
            "field_type": "string",
            "visibility": true,
            "nullable": true
        }
    ]
}

describe('DATA', () => {

    it('should setup all data channels ', async done => {
        await sdk.setupDataChannels(DOMAIN_ID).then(res => {
        expect(res.OCXPayload.status).toEqual(200)
        expect(res.OCXPayload.data).toEqual(true);
        done();
        });
    },config.timeout);
    
    it('should return a host', async done => {
        await sdk.createDataHost(HostData).then(res => {
            expect(res.OCXPayload.data).toHaveProperty('host_name');
            done();
        });
    });


    //
    it('should return a Table', async done => {
        await sdk.createDataTable(newtable).then(res => {
          expect(res.OCXPayload.status).toBe(200);
          done();
        });
    });

    it('should return a new Field', async done => {
        await sdk.createDataField(newtable.fields[0],newtable.table_name).then(res => {
          expect(res.OCXPayload.status).toBe(200);
          done();
        });
    });

    it('should return all hosts', async done => {
        await sdk.getDataHosts().then(res => {
            expect(res.OCXPayload.status).toBe(200);
            done();
        });
    });




});