import { AxiosRequestConfig } from "axios";

import { NewUser, LoginUser } from "./ServiceSchema/AuthSchema";
import { NewTable, NewHost, NewField } from "./ServiceSchema/DataSchema";
import { ProfileType, ProfileFields, ProfileRecords, ProfileData } from "./ServiceSchema/ProfileSchema";
import { NewRequest } from './ServiceSchema/AccessSchema';

export interface Options extends AxiosRequestConfig {
  version?: string;
  json?: boolean;
  data?: object;
  headers?: Headers;
}

export interface Headers {
  client_id?: string;
  client_secret?: string;
}

export { NewUser, LoginUser, NewHost, NewField, NewTable, ProfileFields, ProfileData, ProfileRecords, ProfileType,NewRequest };
