/* 
  *  Created By Faxx
  *  wa.me/6281537668728
  *  github.com/@faxxcoders
*/

require("./config");
const axios = require("axios")
const { 
     exec, 
     spawn,
     execSync 
} = require("child_process")
const {
     TelegraPh,
     UploadFileUgu
} = require("../lib/uploader");
const {
     runtime,
     Styles,
     getGroupAdmins,
     jsonformat, 
     generateProfilePicture,
     getBuffer
} = require("../lib/func");
const fs = require("fs");
const chalk = require("chalk");
const { fromBuffer } = require("file-type");
const fetch = require("node-fetch");


module.exports = (sock, m, chatUpdate, store) => {
	   try {
	   const totalcase = () => {
         var mytext = fs.readFileSync("./system_faxx/faxx.js").toString()
         var numUpper = (mytext.match(/case "/g) || []).length;
         return numUpper
        }
       const { arrayMenu } = require("../lib/menu");
       const body = (
(m.mtype === "conversation" && m.message.conversation) ||
(m.mtype === "imageMessage" && m.message.imageMessage.caption) ||
(m.mtype === "documentMessage" && m.message.documentMessage.caption) ||
(m.mtype === "videoMessage" && m.message.videoMessage.caption) ||
(m.mtype === "extendedTextMessage" && m.message.extendedTextMessage.text) ||
(m.mtype === "buttonsResponseMessage" && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === "templateButtonReplyMessage" && m.message.templateButtonReplyMessage.selectedId)
) ? (
(m.mtype === "conversation" && m.message.conversation) ||
(m.mtype === "imageMessage" && m.message.imageMessage.caption) ||
(m.mtype === "documentMessage" && m.message.documentMessage.caption) ||
(m.mtype === "videoMessage" && m.message.videoMessage.caption) ||
(m.mtype === "extendedTextMessage" && m.message.extendedTextMessage.text) ||
(m.mtype === "buttonsResponseMessage" && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === "templateButtonReplyMessage" && m.message.templateButtonReplyMessage.selectedId)
) : "";
       const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : "."
        const isCmd = body.startsWith(prefix)
        const command = isCmd ? body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase() : ""
        const args = body.trim().split(/ +/).slice(1)
        const text = args.join(" ")
        const sender = m.key.fromMe ? (sock.user.id.split(":")[0]+"@s.whatsapp.net" || sock.user.id) : (m.key.participant || m.key.remoteJid)
        const faxxRAR = (m.quoted || m)
        const quoted = (faxxRAR.mtype == "buttonsMessage") ? faxxRAR[Object.keys(faxxRAR)[1]] : (faxxRAR.mtype == "templateMessage") ? faxxRAR.hydratedTemplate[Object.keys(faxxRAR.hydratedTemplate)[1]] : (faxxRAR.mtype == "product") ? faxxRAR[Object.keys(faxxRAR)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ""
        const qmsg = (quoted.msg || quoted)
        async function reply(text, options = {}) {
        	return sock.sendMessage(m.chat, {
        	text,
            contextInfo: {
            	extrenalAdReply: {
            	   title: options.title ? options.title : "Faxx Bot",
                  body: options.body ? options.body : "Library Baileys",
                  thumbnailUrl: options.thumbnailUrl ? options.thumbnailUrl : "https://telegra.ph/file/1df8653a37cf52ceaebe0.jpg",
                  mediaType: 2,
                  sourceUrl: options.sourceUrl ? options.sourceUrl : "https://github.com/faxxcoders"
                  renderLargerThumbnail: options.renderLargerThumbnail ? options.renderLargerThumbnail : false
                     }
                  }
               }, { quoted: m })
             }
             const react = (emote) => {
           	conn.sendMessage(m.chat, { react: { text: emote,  key: m.key }})
           }
 

 if (isCmd) console.log("~> [CMD]", command, "from", pushname, "in", m.isGroup ? "Group Chat" : "Private Chat", '[' + args.length + ']');

  switch (command) {
  	case "ai": {
  	try {    
  	if (!text) return reply(`*[ Text Required ]*\n${prefix + command} hello ai`)
      react(react_loading);
      var { result } = await (await fetch(BASE_URL + `/openai?text=${text}`)).json()
      reply(result)
       } catch (e) {
          reply("Terjadi Kesalahan");
         }
  	}
      break
      case "blackbox": {
      try {    
  	if (!text) return reply(`*[ Text Required ]*\n${prefix + command} hello ai`)
      react(react_loading);
      var { result } = await (await fetch(BASE_URL + `/blackboxAIChat?text=${text}`)).json()
      reply(result)
        } catch (e) {
          reply("Terjadi Kesalahan");
         }
  	}
      break
      case "ragbot": {
      try {    
  	if (!text) return reply(`*[ Text Required ]*\n${prefix + command} hello ai`)
      react(react_loading);
      var { result } = await (await fetch(BASE_URL + `/ragbot?text=${text}`)).json()
      reply(result)
        } catch (e) {
          reply("Terjadi Kesalahan");
         }
  	}
      break
      case "luminai": {
      try {    
  	if (!text) return reply(`*[ Text Required ]*\n${prefix + command} hello ai`)
      react(react_loading);
      var { result } = await (await fetch(BASE_URL + `/luminai?text=${text}`)).json()
      reply(result)
        } catch (e) {
          reply("Terjadi Kesalahan");
         }
  	}
      break
      case "smartcontract": {
      try {    
  	if (!text) return reply(`*[ Text Required ]*\n${prefix + command} hello ai`)
      react(react_loading);
      var { result } = await (await fetch(BASE_URL + `/smartcontract?text=${text}`)).json()
      reply(result) 
        } catch (e) {
          reply("Terjadi Kesalahan");
         }   
  	}
      break
      case "ocr": {
      try {    
      if (!quoted) return reply(`*[ Reply Image With caption ]* ${prefix+command}`)          
      //if (!quoted) return reply(`Reply to Image With Caption ${prefix + command}`)
       if (/image/.test(mime)) {
         react(react_loading);
         var media = await sock.downloadAndSaveMediaMessage(qmsg)
         const tolink = await TelegraPh(media)
         const osier = await (await fetch(BASE_URL + `/ocr?url=${tolink}`)).json()
        reply(osier.result)
        }
          } catch (e) {
          reply("Terjadi Kesalahan");
         }
      }
      break
      case "githubstalk": {
      	try {    
      	if (!text) return reply(`*[ Example ]* ${prefix+command} text`)
		 react("🔥")
		 var fsx = await (await fetch(BASE_URL + `/githubstalk?username=${text}`)).json()
		 var { 
					id,
					public_gists,
					public_repos,
                    followers,
                    following,
                    created_at,
                    updated_at,
                    name,
                    bio,
                    location
         } = fsx.result
        var gh = `*[ Github Stalk ]*\n\n`
                 gh += `- User Name: ${text}\n`
                 gh += `- Nick Name: ${name}\n`
                 gh += `- Bio: ${bio}\n`
                 gh += `- Location: ${location}\n`
                 gh += `- ID: ${id}\n`
                 gh += `- Followers: ${followers}\n`
                 gh += `- Following: ${following}\n`
                 gh += `- Public Repos: ${public_repos}\n`
                 gh += `- Public Gists: ${public_gists}\n`
                 gh += `- Created At: ${created_at}\n`
                 gh += `- Updated At: ${updated_at}\n`
      reply(gh)
        } catch (e) {
          reply("Terjadi Kesalahan");
         }
      }
      break
      case "mlstalk": {
      try {    
      let [text1, text2] = text.split("|")
	  if (!text1 || !text2) return reply(`*[ Example ]*\n${prefix+command} <id>|<zoneid>`)
	  let fx = await(await fetch(BASE_URL + `/mlstalk?id=${text1}&zoneid=${text2}`)).json()
      let caption = `*[ ML Stalk ]*

- Game ID : ${dari}
- Zone ID : ${ke}
- Nickname : ${fx.result.userName}`
      reply(caption)
        } catch (e) {
          reply("Terjadi Kesalahan");
         }
      }
      break
      case "styletext": {
      try {    
      if (!text) return reply(`*[ Example ]* ${prefix+command} text`)
      var anu = await (await fetch(BASE_URL + `/styletext?text=${text}`)).json()
      var anuu = anu.result
      var teks = `Style Text From ${text}\n\n`
      for (let i of anuu) {
      teks += `- *${i.name}* : ${i.result}\n\n`
      }
      reply(teks)
        } catch (e) {
          reply("Terjadi Kesalahan");
         }
      }
      break
      case "ssweb": {
      try {    
      if (!text) return reply(`*[ Example ]* ${prefix+command} text`)
      react(react_loading);
      const res = await fetch(BASE_URL + `/screenshot-web?url=${encodeURIComponent(text)}&type=desktop`).then(response => response.buffer())       
       await sock.sendMessage(m.chat, { image: res, caption: text }, {quoted: m }); 
      react(react_done);
       } catch (e) {
          reply("Terjadi Kesalahan");
         }	
      }
      break
      case "tourl": {                
       var media = await sock.downloadAndSaveMediaMessage(qmsg)
       if (/image/.test(mime)) {
         var anu = await TelegraPh(media)
          reply(util.format(anu))
        } else if (!/image/.test(mime)) {
          var anu = await UploadFileUgu(media)
          reply(util.format(anu))
          }
       await fs.unlinkSync(media)
       }
       break     
       case "sticker":
       case "s": {
         if (!quoted) return reply(`Reply to Video/Image With Caption ${prefix + command}`)
         if (/image/.test(mime)) {
         var media = await quoted.download()
         let encmedia = await sock.sendImageAsSticker(m.chat, media, m, {
packname: packname,
author: author
         })
        await fs.unlinkSync(encmedia)
        } else if ((m.mtype == "videoMessage") || /video/.test(mime)) {
        if ((quoted.m || quoted).seconds > 11) return reply("Maximum 10 seconds!")
        var media = await quoted.download()
        let encmedia = await sock.sendVideoAsSticker(m.chat, media, m, {
packname: packname,
author: author
        })
        await fs.unlinkSync(encmedia)
         } else {
        return reply(`Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
         }
       }
       break;
       case "totalfitur": {
      	reply(`Total Fitur Bot Saat ini ${totalcase()}`)
      }
      break
      case "runtime": {
         reply(runtime(process.uptime()))
      }
      break
      case "menu": {
      var mem = `- *Library* : @whiskeysockets/baileys@${require("@whiskeysockets/baileys/package.json").version}\n
      - *Total Fitur* : ${totalcase()}
      - *Type* : Case\n${arrayMenu(prefix)}`
      reply(Styles(mem), { renderLargerThumbnail: true })
      }
      break
  	default:
        	}
        } catch (e) {
      console.log(e)
   }
}

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(chalk.redBright(`Update ${__filename}`));
	delete require.cache[file];
	require(file);
});

