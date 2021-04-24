import { Sdk } from '../';
const faker = require('faker')
const config = require('../config');

const sdk = new Sdk();
const newUser =   {
    "password": "testing",
    "email": faker.internet.email(),
    "firstname": "soro",
    "lastname": "soke",
    "profile_id": 1,
    "gender": "male",
    "role_id" : "1",
    "group_id" : "1",
    "phone": "0805423789"
};

const sdkUser =   {
    "password": "testing",
    "email": faker.internet.email(),
    "firstname": "soro",
    "lastname": "soke",
    "profile_id": 1,
    "gender": "male",
    "phone": "0805423789"
};

const LoginUser = {
    "username": newUser.email,
    "password": "testing",
    "grant_type" : "password",
    "scope" : "",
    'client_id': parseInt(process.env.PASSPORT_CLIENT_ID as string,10),
    'client_secret': process.env.PASSPORT_CLIENT_SECRET,

}
//

describe('Auth', () => {
    it('should register a user', async  done => {
        await sdk.register(newUser).then(res => {
            expect(res.OCXPayload.status).toBe(true);
            expect(res.OCXPayload.data).toHaveProperty('token');
            expect(res.OCXPayload.data).toHaveProperty('client_secret');
            expect(res.OCXPayload.data).toHaveProperty('octopusx_secret');
            done();
        });
        
    },config.timeout);

    it('should return true if login successfully', async done => {
        await sdk.login(LoginUser).then(res => {
            expect(res).toHaveProperty('access_token');
            done();
        });
    }, config.timeout);
    
    it('should return a authenticated user', async done => {
        await sdk.getAuthUser().then(res => {
            expect(res.OCXPayload.data).toHaveProperty('user');
            expect(res.OCXPayload.data).toHaveProperty('id');
            done();
        });
    }, config.timeout);

    it('should return a valid  user', async done => {
         sdk.showUser(1).then(res => {
                expect(res.OCXPayload.data).toHaveProperty('id');
                expect(res.OCXPayload.data).toHaveProperty('user_role');
                done();
            });
    }, config.timeout);

    it('should create a client ocx-sdk user ', async done => {
        await sdk.createAuthClientUser(sdkUser).then(res => {
            expect(res.OCXPayload.data).toHaveProperty('client_secret');
            expect(res.OCXPayload.data).toHaveProperty('client_id');
            expect(res.OCXPayload.status).toBe(true);
            done();
        });
    },config.timeout);
});