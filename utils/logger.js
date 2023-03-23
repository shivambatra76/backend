const config = require('config');
const logLevel = config.get("logger.level");
const supportedLevels = config.get("logger.supportedLevels");

const logger ={
    info:(params)=>{
        if(supportedLevels.indexOf(logLevel)>=supportedLevels.indexOf("info")){
            console.info(params);
        }        
    },
    warn:(params)=>{
        if(supportedLevels.indexOf(logLevel)>=supportedLevels.indexOf("warn")){
            console.warn(params);
        }        
    }, 
    debug:(params)=>{
        if(supportedLevels.indexOf(logLevel)>=supportedLevels.indexOf("debug")){
            console.debug(params);
        }        
    },
    error:(params)=>{
        if(supportedLevels.indexOf(logLevel)>=supportedLevels.indexOf("error")){
            console.error(params);
        }        
    }
}
module.exports = {
    logger
}
