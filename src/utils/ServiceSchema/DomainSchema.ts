export interface NewDomain {
    domain?: string,
    node_type?: string,
    group_id?: string,
}

export interface DomainInvitee  {
    domain?: string,
    invite_scope?: string,
    invite_status?: string,
}
export interface DomainGroup {
    title?: string
}
export interface DomainPermissions {
    invite_id?: string,
    access_scope ?: string,
    access_entity ?: string,
    group_id ?: string,
    node_id ?: string
}