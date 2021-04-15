import { AxiosRequestConfig } from "axios";

import { NewUser, LoginUser,NewGroup,NewRole } from "./ServiceSchema/AuthSchema";
import { NewTable, NewHost, NewField, NewQuery, GridLoader, DataConnection } from "./ServiceSchema/DataSchema";
import { ProfileType, ProfileFields, ProfileRecords, ProfileData } from "./ServiceSchema/ProfileSchema";
import { NewRequest } from './ServiceSchema/AccessSchema';
import { NewDomain, SubDomain } from './ServiceSchema/DomainSchema';


export interface Options extends AxiosRequestConfig {
  version?: string;
  json?: boolean;
  data?: object;
  headers?: Headers;
}

export interface Headers {
  clientId?: string;
  clientSecret?: string;
}

export {
  NewUser, LoginUser,NewGroup,NewRole,
  NewHost, NewField, NewTable,NewQuery,GridLoader,DataConnection,
  ProfileFields, ProfileData, ProfileRecords, ProfileType,
  NewRequest,
  NewDomain,SubDomain
};
