import { Options, NewUser, LoginUser } from "../utils/DataSchema";
import request from "../utils/requests";

export default class Access {

    options: Options;
  constructor(options: Options) {
    this.options = options;
    this.options.url = process.env.OCX_DATA_BASE_URL || process.env.VUE_APP_OCX_DATA_BASE_URL;
  }
}