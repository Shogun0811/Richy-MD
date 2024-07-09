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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZTbS82S1IxdGUxRGUrVHd3YVVTNlBrY1FWci9xd0xHamsralRucGpFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHJJb0l4eEV3RnN6bU1CRnV3QkVSd0RqVHU5dmp2RC9XUU1nN2ZkdCtCUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TWEvWkIxSFY2VUQ3dzZ0c216VnRTMkVWTVIrYXg5SHNPeGVGand2OEdrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmM3p3clpnREpNeTR3WWRvMERwaWJlNzBoYU13QXFlbWFkVERzQXIxRTI4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFEbjFhMTVLZUQ1S09VMzdwYjNqNW1HT1hlbFR5Z2xJNmFWekpHeTNEblE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1aTFpKMXJtSDBuRTZibDh2RjlYYkEwemZDMGJCL2FQaHl1QWVxVlFRQ289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUFDRHpReVZMTTBDYm55Q3BYVVJGOGw5UEcrUGVjMGJqeXpZb2ZzakNubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkVqdU5DY216TVQ1WmFMQktyVEZzeG81YjVaS2w1aXdzWWMwVmg5WldGcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQ4SG5ROEdjVkY2NWdBUHJ0alBZVmNsaW44aEc5QVA3aXRibk9HOUpoR1VMalhNUy8rc3ZjWmh1UlNJREFtQ0IwZEVMbXJnTVNHRUNXWWxQQ0lMcWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTksImFkdlNlY3JldEtleSI6IldwM1AzbHNZVmdtTjJ0K1BwRTJwaDFWeUJacm05UGY2bUxYRm80cTVObDg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjoxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUdW5vS29lNlJEaTZ5aWM4SWYtRlBBIiwicGhvbmVJZCI6IjRjMWIzZGJkLWY4OWEtNGJmYi05M2M5LWRlYWZjOTgyNTg2NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLUERWbFBOdUErWW1tdEZ1Q3BQdTFicnRHT0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVA0bVhoZnRqOTg3ZFprSDZ3dTcya2FzN1ZrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRDOUMxSlpOIiwibWUiOnsiaWQiOiIyMzc2OTM3NTUzOTg6MTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU0xHIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOcnl1MEFRMjRXMHRBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJQNnJPaVFVY2VmSlVsOFkxMWZ6UW5GeitPTWViV0lERk9Qb2lrM1QxQnhnPSIsImFjY291bnRTaWduYXR1cmUiOiJONGovQWRYQ2VYTkRPckh2K053bER3a3dNekdaUmxDanpZREI4QzhZUGpHLzgwSnBtb25GTlY0TXZ0bU00TXRneXlndXFrYWZwQ2UyL05MME5yRTFCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibnpGdDd1OTdkZXhZTnBDVndpQ0JiV3ZiNmV4TmxHZ0o3b2tLYlFNQWloV2tBQ0ZRRVRqRGhxR1lFNHowVzRidUpMdSt4bVBpV0szc0JvanVVVTUxaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2OTM3NTUzOTg6MTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVCtxem9rRkhIbnlWSmZHTmRYODBKeGMvampIbTFpQXhUajZJcE4wOVFjWSJ9fV0sInBsYXRmb3JtIjoic21iYSJ9"
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
