//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "etoundiruben45@gmail.com";
global.location = "Lagos,Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/GEEKMDXINC/Richy-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vae5OOcB4hdWhVdLJM2t";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vae5OOcB4hdWhVdLJM2t";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/5ff1b9b38cbb89aa5540d.jpg,https://telegra.ph/file/48d9d8a175d42cd537c5b.jpg,https://telegra.ph/file/cf2dbeb947cf2a0c90d22.jpg,";
global.devs = "237620857930";
global.sudo = process.env.SUDO || "237620857930";
global.owner = process.env.OWNER_NUMBER || "237620857930";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/5ff1b9b38cbb89aa5540d.jpg,https://telegra.ph/file/5ff1b9b38cbb89aa5540d.jpg,https://telegra.ph/file/cf2dbeb947cf2a0c90d22.jpg,";
global.waPresence = process.env.WAPRESENCE || "recording";//online,recording,composing,available,unavailable
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://geek-paring-code.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib05rY1ZXeUR3VzYwV3Z2OEhPaXlvNitjRmY5WnBPTHF5WFduUGxocHZIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXNmRk5Rb1A5YVVXRVNRUERTL20zZHVVcXRzaldzSG4ydWNDSkdvdkV4cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQlRqRlBFWXlJbTVpT0l4WmpMSThVUnNVd1lFUGpZT3RVa0NVVEhiSjN3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwblVxaWM4SU03R1N5QlA1d0NPM3d2YkZMckVTS1o0MzhpMDQyam1tdmhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldEVzdwNGl6aUlNd3ptcFNFeVczMkFLNXRPVm9mSTdkU0ZJVGpobTVQV2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpheDF1T29naThqMGlHUlhUSk9aMUpkaVYxZDhlTm85RWJET215U1RjaGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT09YNlRoZ1c2dlJyT0RZc0dBMjhrc1hrNWl0TFNrOE95eFBNcUhsS0Zucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmZlVnMrd2RDMUwzWUhDR21sakFFSjBxYXQyOVJmUVFoM1JHVXRRaVFpST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9jVkpYTk1NUUp6bTNGeWJZV1FJY3NVVTQzOUlZbmFwRktxRzJFdEZrZjkxQVdGZnQ3SzlNY1NlUVRrZkNUZ1VHQU53Q3JKaWs4ekJJMkNzTEk2cmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJ2NGkzdUxLaWpkTnZkY2pRTzZhaXRMU2NpR29ZMVhBOHJLZ05vWENveEhFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVVRBR3pZampUVDJNRXUzWFM1dVE5dyIsInBob25lSWQiOiJhMTE5MmU3Ni05ZGZkLTRiMTUtYTA4Ni05ZWM0MDRhZDJjYWUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnErSm1ocWVYamVQQUEzNXdRWkRuS292elhFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRjM25PcGJpcS9MeU1ITC9OYmZqWFlJL2IyOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJZNTRMU0NHMyIsIm1lIjp7ImlkIjoiMjM3NjkzNzU1Mzk4OjE0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdmY7wnZmH8J2ZgiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTm55dTBBUTdNeXN0QVlZQmlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUDZyT2lRVWNlZkpVbDhZMTFmelFuRnorT01lYldJREZPUG9pazNUMUJ4Zz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibW5KUkU4QkV1Q3UwQUFocmQ5ckFCb2FOTkp3ZkcvczI5NGQ0L0o1WkV3N015Y3k5TUd0K01QZ29nUURZbGxOaUNBbXZ2bEpNNWUzdUNKNzNjelNGQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IklvQkV6QTZjNkU5VGp0RnlVOEI2bnlyR1RGTEVSd1cvVTQ4bjBDb2V5SWM0VHcxSWNFc3V3UzJIOTNkcmNISmdqSzBlbm5xQjlNLzhBUlFhQStPcGhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjkzNzU1Mzk4OjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlQrcXpva0ZISG55VkpmR05kWDgwSnhjL2pqSG0xaUF4VGo2SXBOMDlRY1kifX1dLCJwbGF0Zm9ybSI6InNtYmEifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || '.',
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©Richy-MD",
  author: process.env.PACK_AUTHER || "🕊",
  packname: process.env.PACK_NAME || "Richy-Md",
  botname: process.env.BOT_NAME || "Richy-Md",
  ownername: process.env.OWNER_NAME || "Richy",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "a0e25c3901a992c4afc2ccd14c87f9ec",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Ednut-Md").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
