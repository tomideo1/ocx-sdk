export interface ProfileType {
  domain_id?: number;
  type?: string;
  title?: string;
}

export interface ProfileRecords {
  domain_id?: number;
  profile_types_id?: number;
  auth_id?: number;
  type?: ProfileType;
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
