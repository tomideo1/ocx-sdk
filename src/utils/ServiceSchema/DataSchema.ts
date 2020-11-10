export interface NewHost {
    domain_id ?: string,
    host_name ?: string,
    host ?: string,
    port ?: number,
    driver ?: string,
    database ?: string,
    username ?: string
    password ?: string
}

export interface NewTable{
    database_type ?: string,
    host_name ?: string,
    table_name ?: string,
    visibility ?: boolean,
    fields ?: NewField
}

export interface NewField{
    field_name ?: string,
    field_type ?: string,
    visibility ?: boolean,
    nullable ?: boolean
}

