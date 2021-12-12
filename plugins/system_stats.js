const Julie = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');

const SYSDTXT = '💻 System status'
const VER = '🧬 Version'
const MSG = 'Hey There! Bot Online now. 💃🏻♥️```\n\n*Developer:* ```Ai Dark Ezio```\n\n*Official Website:* https://AiDarkEzio.github.io\n\n*Youtube channel :* https://youtube.com/channel/UCeDeaDD8dpdMT2gO3VHY1JQ\n\n```Thank You For Using Queen Jennifer💞'


Julie.addCommand({pattern: 'alive', fromMe: true, desc: 'Lang.ALIVE_DESC'}, (async (message, match) => {

    var a_plk =  "https://i.imgur.com/zdcqaaG.jpeg" ;
    var BUTTHANDLE = '.';
 

    var logo = await axios.get (a_plk, { responseType: 'arraybuffer' })
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })
    
    const buttons = [
        {buttonId: BUTTHANDLE + 'qaversion', buttonText: {displayText: VER }, type: 1},
        {buttonId: BUTTHANDLE + 'qasysstats', buttonText: {displayText: SYSDTXT }, type: 1}
    ]
    const buttonMessage = {
        contentText: MSG,
        footerText: 'Queen Jennifer © ᴘᴜʙʟɪᴄ ᴇᴅɪᴛɪᴏɴ',
        buttons: buttons,
        headerType: 4,
        imageMessage: media.message.imageMessage    
    }
    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage);
     
}));

Julie.addCommand({pattern: 'qasysstats', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
    await QueenAmdi.amdi_setup()
    const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
    await message.sendMessage(
        '```' + child + '```', MessageType.text, {quoted: message.data}
    );
}));

Julie.addCommand({pattern: 'qaversion', fromMe: true, desc: Lang.BOT_V, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
    await QueenAmdi.amdi_setup()
    await message.client.sendMessage(message.jid, 
        `*🧬 Queen Amdi Version 🧬*\n\n` + 
        '```Installed version :```\n' +
        Lang.version + 
        `\n\nCheck official website : https://amdaniwasa.com/`
   , MessageType.text, {quoted: message.data});
    
}));
