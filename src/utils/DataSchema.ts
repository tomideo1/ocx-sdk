import { AxiosRequestConfig } from 'axios';

export interface Options extends AxiosRequestConfig {
    version?: string;
    json?: boolean;
    data?: object;
    headers?: Headers;
}

export interface Headers {
    'ocx-client-id'?: string;
    'ocx-client-secret'?: string;
    'authorization' ?: string

}