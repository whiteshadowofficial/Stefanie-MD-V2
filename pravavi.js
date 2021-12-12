
const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('prabavi.env')) require('dotenv').prabavi({ path: './prabavi.env' });

// xxxx Special Functions
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
 PLKAFN: process.env.BAD_WORDS === undefined ? false : process.env.BAD_WORDS,
 PHONE: process.env.NUMBER === undefined ? '+94779529221' : process.env.NUMBER,
 XF_ZERO: process.env.XF_ZERO === undefined ? '009' : process.env.XF_ZERO,
 SAFE_MODE: process.env.SAFE_MODE === undefined ? 'false' : process.env.SAFE_MODE,   
 OA_NAME: process.env.DEPLOYER === undefined ? 'Kaweesha chamod' : process.env.DEPLOYER,    
};
