/* 
  *  Created By Faxx
  *  wa.me/6281537668728
  *  github.com/@faxxcoders
*/

const fs = require("fs");
const chalk = require("chalk")

const menu = {
  main: [
   'menu',
   'ping',
   'runtime',
   'owner',
   'totalfitur' 
],
ai: [
   'blackbox',
   'openai',
   'ragbot',
   'ocr',
   'smartcontract',
   'luminai'
],
tools: [
  'ssweb',
  'fetchjson',
  'tourl',
  'sticker',
  'githubstalk',
  'mlstalk',
  'styletext'
]
}
function arrayMenu(prefix) {
  let text = ""; 
  for (const type in menu) {
    text += `▧ ─「 *${type}* 」\n`; 
  menu[type].forEach(command =>
    text += `│ ∘  ${prefix + command}\n`); 
    text += `▧ ──────────────━\n\n`;
   }
   return text; 
}

module.exports = { arrayMenu }

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(chalk.redBright(`Update ${__filename}`));
	delete require.cache[file];
	require(file);
});