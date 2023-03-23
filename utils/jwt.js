var fs = require('fs');
const jwt = require('jsonwebtoken');
const {logger} =  require('../utils/logger');
const cert = fs.readFileSync(require.resolve('../jwtkeys/jwtRSA256-private.pem'),'utf8');
const publicCert = fs.readFileSync(require.resolve('../jwtkeys/jwtRSA256-public.pem'),'utf8');

const jwtLib = {
  create:async (body)=>{
    return new Promise ((resolve,reject)=>{
      try{
        jwt.sign(body,cert,{ algorithm: 'RS256' },function (err, payload) {
        if(err){
          logger.error(err);
          reject(err);
        }
        resolve(payload)
    })}
    catch(e){throw e;}
    });
  },
  verify:async (token)=>{
    return new Promise ((resolve,reject)=>{
      try{
        jwt.verify(token,publicCert,{ algorithm: ['RS256'] },function (err, payload) {
        if(err){
          logger.error(err);
          reject(err);
        }
        resolve(payload)
    })}
    catch(e){throw e}
    });
  
}
};
module.exports={
  jwtLib
};
