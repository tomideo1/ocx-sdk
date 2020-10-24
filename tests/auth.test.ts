import { Sdk } from '../';
const headers = {
    'client_id': process.env.OCX_CLIENT_ID,
    'client_secret': process.env.OCX_CLIENT_SECRET,
    'auth-key': `Bearer tokenString`,
}

const sdk = new Sdk({headers});
const user =   {
    "password": "testing",
    "email": "sorosoke@gmail.com",
    "firstname": "soro",
    "lastname": "soke",
    "profile_id": 1,
    "gender": "male",
    "phone": "0805423789"
};

describe('Auth', () => {
    it('should return a user', async () => {
        await sdk.register(user).then(res => {
            expect(res.status).toBe(true);
        });
    });
    
    it('should return true if login succesful', async () => {
        await sdk.login(user).then(res => {
            expect(res.status).toBe(true);
        });
    });
});