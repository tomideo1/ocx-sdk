import { AxiosRequestConfig } from 'axios';

import {NewUser,loginUser} from './ServiceSchema/AuthSchema';
import {NewTable,NewHost,NewField} from './ServiceSchema/DataSchema';
export interface Options extends AxiosRequestConfig {
    version?: string;
    json?: boolean;
    data?: object;
    headers?: Headers;
}

export interface Headers {
    'client_id'?: string;
    'client_secret'?: string;

} 

export {
    NewUser,loginUser,NewHost,NewField,NewTable
}
