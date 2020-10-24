import { AxiosRequestConfig } from 'axios';

import {NewUser,User} from './AuthSchema';
export interface Options extends AxiosRequestConfig {
    version?: string;
    json?: boolean;
    data?: object;
    headers?: Headers;
}

export interface Headers {
    'client_id'?: string;
    'client-secret'?: string;
    'auth-key' ?: string

} 

export {
    NewUser,User
}
