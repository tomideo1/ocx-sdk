export interface NewUser {
    firstname ?: string,
    lastname ?: string,
    profile_id ?: number,
    gender ?: string,
    phone ?: string,
    email ?: string,
    password ?: string
}

export interface User{
    username ?: string,
    grant_type ?: string,
    password ?: string,
    scope ?: string
}

