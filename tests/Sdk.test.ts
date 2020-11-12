import { Sdk } from '../';

const headers = {}
const sdk = new Sdk({headers});

test('initializes the ocx-sdk', () => {
    expect(sdk.init()).toBe('Sdk Initialized....');
});
