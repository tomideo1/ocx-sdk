
import  * as _ from 'lodash';
import { OcxExceptions } from './Exceptions/OcxExceptions';

export default  {
        /**
         * Returns true or false if the credentials exist or not
         * @param {Object} args
         * @returns {Boolean} returns true if all the credentials are in place
         */
      checkCredentials(args: object){
          
            // @ts-ignore
            if(_.isEmpty(args.headers)){
            throw new OcxExceptions('you did not provide any valid octopusx credentials');
        }
            // @ts-ignore
            if(!args.headers.hasOwnProperty('client_id')){
            throw new OcxExceptions('you did not provide the client id');
        }
            // @ts-ignore
            if(!args.headers.hasOwnProperty('client_secret')){
            throw new OcxExceptions('you did not provide the client secret');
        }

        return true
    }
};


