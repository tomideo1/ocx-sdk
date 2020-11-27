import { ProfileType } from './../src/utils/ServiceSchema/ProfileSchema';
import { Sdk } from '../';
const headers = {
    'client_id': process.env.OCX_CLIENT_ID,
    'client_secret': process.env.OCX_CLIENT_SECRET,
    'auth-key': `Bearer tokenString`,
}

const sdk = new Sdk({headers});
const DOMAIN_ID = 2


const PROFILETYPE = {
 "type": "string",
  "title": "string",
};

const PROFILERECORD = {
  "auth_id": 0,
  "domain_id": 0,
    "profile_types_id": 0,
  "title" : "gender"
};


const PROFILEFIELD = {
  "title" : "gender"
};



describe('PROFILE', () => {
    it('should create a profile type', async done => {
        await sdk.createProfileType(PROFILETYPE).then(res => {
            // console.log(res)
            // expect(res.OCXPayload.data).toHaveProperty('host_name');
            done();
        });
    });


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