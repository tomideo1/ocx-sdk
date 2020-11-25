export interface ProfileType {
  domain_id?: string;
  type?: string;
  title?: string;
}

export interface ProfileRecords {
  domain_id?: string;
  profile_type_id?: string;
  auth_id?: string;
  type?: string;
  title: string;
}
export interface ProfileFields {
  domain_id?: string;
  profile_types_id?: string;
  title: string;
}

export interface ProfileData {
  domain_id: number;
  auth_id: number;
}
