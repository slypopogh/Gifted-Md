// GIFTED TECH //
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Gifted~FUSs3Qwb",
  HEROKU_API_TOKEN: process.env.HEROKU_API_TOKEN || "HRKU-0a1fe665-8a35-42e8-b7ad-761f25ffe195",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "aaa",
  KOYEB_API_TOKEN: process.env.KOYEB_API_TOKEN || "",
  KOYEB_APP_NAME: process.env.KOYEB_APP_NAME || "",
  DEPLOYMENT_PLATFORM: process.env.DEPLOYMENT_PLATFORM || "",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS !== undefined ? process.env.AUTO_STATUS_SEEN === 'false' : true, 
  AUTO_DOWNLOAD: process.env.AUTO_DOWNLOAD !== undefined ? process.env.AUTO_DL === 'false' : true,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'false' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'false' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'false' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'false' : true,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'false' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'false' : true,
  
  
  AUTO_REJECT_CALLS: process.env.AUTO_REJECT_CALLS !== undefined ? process.env.REJECT_CALL === 'false' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'false' : true,
  MODE: process.env.MODE || 'public',
  PREFIX: process.env.PREFIX || '.',
  PORT: process.env.PORT || "5000", /* Where App Will Listen On */
  OWNER_NAME: process.env.OWNER_NAME || "ALMIGHTY",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "233558261921",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'false' : false, 
};


module.exports = config;
