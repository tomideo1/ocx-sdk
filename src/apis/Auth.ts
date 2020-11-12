import { Options, NewUser, LoginUser } from "../utils/DataSchema";
import request from "../utils/requests";

export default class Auth {
  options: Options;
  constructor(options: Options) {
    this.options = options;
    this.options.url = process.env.OCX_AUTH_BASE_URL;
  }

  async register(data: NewUser) {
    const requestOptions: Options = {
      ...this.options,
      data
    };
    const url = `auth/user/add`;
    return request(`POST`, url, requestOptions);
  }

  async registerClientUser(data: NewUser) {
    const requestOptions: Options = {
      ...this.options,
      data
    };
    const url = `auth/user/add`;
    return request(`POST`, url, requestOptions);
  }
  async login(data: LoginUser) {
    data.client_id = process.env.PASSPORT_CLIENT_ID;
    data.client_secret = process.env.PASSPORT_CLIENT_SECRET;
    const requestOptions: Options = {
      ...this.options,
      data
    };
    const url = `auth/login/token`;
    return request(`POST`, url, requestOptions);
  }

  async getUser() {
    const requestOptions: Options = {
      ...this.options
    };
    const url = `auth/client/verify`;
    return request(`GET`, url, requestOptions);
  }

  async createUser(data: NewUser) {
    const requestOptions: Options = {
      ...this.options,
      data
    };
    const url = `auth/client`;
    return request(`POST`, url, requestOptions);
  }
}
