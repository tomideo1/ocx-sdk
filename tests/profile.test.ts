import { Sdk } from '../';
const config = require('../config');
const headers = {
    'client_id': process.env.OCX_CLIENT_ID,
    'client_secret': process.env.OCX_CLIENT_SECRET,
    'auth-key': `Bearer tokenString`,
}

const sdk = new Sdk({headers});
const DOMAIN_ID = 2


const PROFILETYPE = {
  "domain_id" : 1,
 "type": "string",
  "title": "stuff",
};

const PROFILERECORD = {
  "domain_id": 1,
  "profile_types_id": 1,
  "auth_id": 1,
  "title": "gender",
};


const PROFILEFIELD = {
  "title" : "gender"
};



describe('PROFILE', () => {
    it('should create a profile type', async done => {
      await sdk.createProfileType(PROFILETYPE).then(res => {
            expect(res.OCXPayload.data).toHaveProperty('type');
            expect(res.OCXPayload.data).toHaveProperty('title');
            expect(res.statusCode).toEqual(201);
            done();
        });
    }, config.timeout);
  
  
    it('should create a profile type', async done => {
      await sdk.createProfileRecords(PROFILERECORD).then(res => {
            // expect(res.OCXPayload.data).toHaveProperty('type');
            expect(res.OCXPayload.data).toHaveProperty('title');
            expect(res.OCXPayload.data).toHaveProperty('id');
            expect(res.OCXPayload.data).toHaveProperty('domain_id');
            expect(res.statusCode).toEqual(201);
            done();
        });
    },config.timeout);


    //
    // it('should return a Table', async done => {
    //     await sdk.createDataTable(newtable).then(res => {
    //       expect(res.OCXPayload.status).toBe(200);
    //       done();
    //     });
    // });

    // it('should return a new Field', async done => {
    //     await sdk.createDataField(newtable.fields[0],newtable.table_name).then(res => {
    //       expect(res.OCXPayload.status).toBe(200);
    //       done();
    //     });
    // });

    // it('should return all hosts', async done => {
    //     await sdk.getDataHosts().then(res => {
    //         expect(res.OCXPayload.status).toBe(200);
    //         done();
    //     });
    // });




});