import { Sdk } from '../';

const headers = {
    'ocx-client-id': process.env.OCX_CLIENT_ID,
    'ocx-client-secret': process.env.OCX_CLIENT_SECRET,
    'authorization': `Bearer tokenString`,
}
const sdk = new Sdk({headers})

test('initializes the sdk', () => {
});