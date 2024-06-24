/* 
  *  Created By Faxx
  *  wa.me/6281537668728
  *  github.com/@faxxcoders
*/

const fs = require("fs");
const chalk = require("chalk")


global.namebot = "Faxx Bot" // Name Bot
global.packname = "Faxx Bot By"
global.author = "Faxx"
global.footer = "Faxx Newbie"
global.react_loading = "🌩️"
global.react_done = "⚡"

global.BASE_URL = "https://xynz.vercel.app/api"

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(chalk.redBright(`Update ${__filename}`));
	delete require.cache[file];
	require(file);
});