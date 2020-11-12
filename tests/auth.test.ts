import { Sdk } from '../';
const faker = require('faker')
const headers = {
    'client_id': process.env.OCX_CLIENT_ID,
    'client_secret': process.env.OCX_CLIENT_SECRET,
    'auth-key': `Bearer tokenString`,
}

const sdk = new Sdk({headers});
const newUser =   {
    "password": "testing",
    "email": faker.internet.email(),
    "firstname": "soro",
    "lastname": "soke",
    "profile_id": 1,
    "gender": "male",
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

const loginUser = {
    "username": newUser.email,
    "password": "testing",
    "grant_type" : "password",
    "scope" : "",
    'client_id': process.env.PASSPORT_CLIENT_ID,
    'client_secret': process.env.PASSPORT_CLIENT_SECRET,

}

describe('Auth', () => {
    it('should return a user', async  done => {
        await sdk.register(newUser).then(res => {
            expect(res.OCXPayload.status).toBe(true);
            expect(res.OCXPayload).toHaveProperty('token');
            expect(res.OCXPayload).toHaveProperty('client_secret');
            // expect(res.OCXPayload).toHaveProperty('octopusx_secret');
            done();
        });
    });

    it('should return true if login successfully', async done => {
        await sdk.login(loginUser).then(res => {
            expect(res).toHaveProperty('access_token');
            done();
        });
    });

    it('should create a client sdk user ', async done => {
        await sdk.createAuthClientUser(sdkUser).then(res => {
            expect(res.OCXPayload).toHaveProperty('client_secret');
            expect(res.OCXPayload).toHaveProperty('client_id');
            expect(res.OCXPayload.status).toBe(true);
            done();
        });
    });
});