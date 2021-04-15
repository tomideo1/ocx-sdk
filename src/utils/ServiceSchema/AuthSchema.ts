export interface NewUser {
  firstname?: string;
  lastname?: string;
  profile_id?: number;
  gender?: string;
  phone?: string;
  email?: string;
  role_id: string;
  group_id: string;
  password?: string;
}

export interface LoginUser {
  username?: string;
  grant_type?: string;
  password?: string;
  scope?: string;
  client_id?: number;
  client_secret?: string;
}

export interface NewGroup {
  name?:string,
  slug?:string
}

export interface NewRole {
  name?:string,
  slug?:string
}