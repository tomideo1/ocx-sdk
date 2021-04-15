export interface NewRequest {
  name?: string;
  data_connection_id?: string;
  data_connection_type?: string;
  path?: string;
  method?: string;
  headers?: object;
  body?: object;
  is_protected?: boolean;
  protected_profile?: string;
  protected_profile_id?: string;

}



