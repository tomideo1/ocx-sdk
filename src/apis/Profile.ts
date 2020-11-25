import { Options, ProfileType, ProfileRecords, ProfileFields, ProfileData } from "../utils/DataSchema";
import request from "../utils/requests";

export default class Profile {
  options: Options;
  constructor(options: Options) {
    this.options = options;
    this.options.url = process.env.OCX_PROFILE_BASE_URL || process.env.VUE_APP_OCX_PROFILE_BASE_URL;
  }

  async createProfileType(data: ProfileType) {
    const requestOptions: Options = {
      ...this.options,
      data
    };
    const url = `ProfileType/add`;
    return request(`POST`, url, requestOptions);
  }

  async getProfileTypes() {
    const requestOptions: Options = {
      ...this.options
    };
    const url = `ProfileType`;
    return request(`GET`, url, requestOptions);
  }

  async createProfileRecords(data: ProfileRecords) {
    const requestOptions: Options = {
      ...this.options,
      data
    };
    const url = `ProfileRecord/add`;
    return request(`POST`, url, requestOptions);
  }

  async getProfileRecords() {
    const requestOptions: Options = {
      ...this.options
    };
    const url = `ProfileRecord`;
    return request(`GET`, url, requestOptions);
  }

  async createProfileFields(data: ProfileFields) {
    const requestOptions: Options = {
      ...this.options,
      data
    };
    const url = `ProfileRecord/add`;
    return request(`POST`, url, requestOptions);
  }

  async getProfileFields() {
    const requestOptions: Options = {
      ...this.options
    };
    const url = `ProfileField`;
    return request(`GET`, url, requestOptions);
  }

  async createProfileData(data: ProfileData) {
    const requestOptions: Options = {
      ...this.options,
      data
    };
    const url = `ProfileData/add/profiledata`;
    return request(`POST`, url, requestOptions);
  }

  async getAllProfileData() {
    const requestOptions: Options = {
      ...this.options
    };
    const url = `ProfileData`;
    return request(`GET`, url, requestOptions);
  }

  async setupProfile() {
      const requestOptions: Options = {
      ...this.options
    };
    const url = `ProfileSetup`;
    return request(`GET`, url, requestOptions);
  }
}
