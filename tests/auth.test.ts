import { Sdk } from '../';
const faker = require('faker')
const headers = {
    'client-id': process.env.OCX_CLIENT_ID,
    'client-secret': process.env.OCX_CLIENT_SECRET,
    'auth-key': `Bearer tokenString`,
}
const config = require('../config');

const sdk = new Sdk({headers});
const newUser =   {
    "password": "testing",
    "email": faker.internet.email(),
    "firstname": "soro",
    "lastname": "soke",
    "profile_id": 1,
    "gender": "male",
    "role" : "1",
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
    it('should register and get a user', async  done => {
         await sdk.register(newUser).then(res => {
            expect(res.OCXPayload.status).toBe(true);
            expect(res.OCXPayload.data).toHaveProperty('token');
            expect(res.OCXPayload.data).toHaveProperty('client_secret');
            expect(res.OCXPayload.data).toHaveProperty('octopusx_secret');
            sdk.showUser(res.OCXPayload.data.id).then(res => {
                expect(res.OCXPayload.data).toHaveProperty('id');
                expect(res.OCXPayload.data).toHaveProperty('user_role');
            });
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
            expect(res.OCXPayload.data.user).toHaveProperty('id');
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