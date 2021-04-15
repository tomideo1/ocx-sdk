import { Sdk } from '../';
const config = require('../config');
const faker = require('faker')
const sdk = new Sdk();
const DOMAIN_ID =  2
const HostData =   {
    "domain_id": 1,
    "host_name": faker.address.city(),
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
    "table_name": faker.address.streetName(),
    "visibility": true,
    "fields": [
        {
            "field_name": faker.address.country(),
            "field_type": "unsigned_integer",
            "visibility": true,
            "nullable": false
        },
        {
            "field_name": faker.address.state(),
            "field_type": "string",
            "visibility": true,
            "nullable": true
        }
    ]
}

describe('DATA', () => {

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

    // it('should return a new Field', async done => {
    //     await sdk.createDataField(newtable.fields[0],newtable.table_name).then(res => {
    //       expect(res.OCXPayload.status).toBe(200);
    //       done();
    //     });
    // });

    it('should return all hosts', async done => {
        await sdk.getDataHosts().then(res => {
            expect(res.OCXPayload.status).toBe(200);
            done();
        });
    });

    it('should return all values in a table', async done => {
        await sdk.dataFetchAll({
            table_name: 'profile_types',
            query: 'id'
        }).then(res => {
            expect(res.OCXPayload.status).toBe(200);
            done();
        });
    });




});