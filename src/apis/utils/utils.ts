
import _ from 'lodash';
import { OcxExceptions } from './Exceptions/OcxExceptions';

export default  {
        /**
         * Returns true or false if the credentials exist or not
         * @param {Object} args
         * @returns {Boolean} returns true if all the credentials are in place
         */
      checkCredentials(args: string[]){
        if(_.isEmpty(args)){
            throw new OcxExceptions('you did not provide any valid octopusx credentials',args);
        }
        let clientId = args['id']
        let clientSecret = args['secret']
        if(_.isEmpty(clientId)){
            throw new OcxExceptions('you did not provide the client id',args);
        }
        if(_.isEmpty(clientSecret)){
            throw new OcxExceptions('you did not provide the client secret',args);
        }

        return true
    }
};


