export interface NewHost {
  domain_id?: number;
  host_name?: string;
  host?: string;
  port?: number;
  driver?: string;
  database?: string;
  username?: string;
  password?: any;
}

export interface NewTable {
  database_type?: string;
  host_name?: string;
  table_name?: string;
  visibility?: boolean;
  fields?: NewField[];
}

export interface NewField {
  field_name?: string;
  field_type?: string;
  visibility?: boolean;
  nullable?: boolean;
}


export interface NewQuery {
  table_name?: string;
  query?: string;
  value ?: string,
  queryPayload?: object,
  relationships?:[],
  order ?: object,
  count ?: any
}

export interface GridLoader {
  table_name?: string,
  url?: string,
  file?: string
}

export interface DataConnection {
  description?:string,
  type?: string,
  method?: string,
  api?:object,
  database?:object
}
