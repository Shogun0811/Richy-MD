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
global.github = process.env.GITHUB || "https://github.com/GEEKMDO99/Richy-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vae5OOcB4hdWhVdLJM2t";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vae5OOcB4hdWhVdLJM2t";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/782e3cbe7c157e425e98a.jpg,https://telegra.ph/file/48d9d8a175d42cd537c5b.jpg,https://telegra.ph/file/cf2dbeb947cf2a0c90d22.jpg,";
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
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/782e3cbe7c157e425e98a.jpg,https://telegra.ph/file/48d9d8a175d42cd537c5b.jpg,https://telegra.ph/file/cf2dbeb947cf2a0c90d22.jpg,";
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
  "RICHY-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0ZTamtGUGRiMnVBVGpKSDVGRUJJMUxiMFRLQURFdHRyUVZna21zekkzdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlRubnJFVmFoNU1ERmFBZUpEOTkvVWNmRm1lOFZaMlBVZ0Q4d2JNcmNDND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTnptRjZYb1p6VjVKd09CR1U0dVlzTDRnVmpDNzlvdkdaQzhhWldQdG5FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmYzM1UkdHYk1uNnhZQ3BtVXNmQm40Rm1uNXR2cmI2eFl1dk9qcVdZTEQwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklLTW5xT3FqV09HMlBhT2dJK2NZWC84Z09YUExLa0dlbXIxbGl4NTBZbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9iQmpZTnB1bHc3OUhrRnd1L1lLUFBXZjdpeC9lMUJZTzM5L0g5dnBNVVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUdYampCQldvVk9WZnJZZFgzM0pUbHlSaVptYmZzbG5mRTR2NlVFR3Jtdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3V0WUUyeTFUR2Y5K0dJdXdVeWZ0cXVTcjFzak1DRmh4QmNIWHFVQ1Rnbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii8vVEgzNXQ2VERMRGt3ZnFCYzFjMWMvOTA3NWxvVkVkMndXeStJZ0g1QzUrUGNjMDJzZWVjMFl4MkdrODBJK0lpUzBsY0xPQ0xxcUVXU3pFb01SS2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIxLCJhZHZTZWNyZXRLZXkiOiJEY2pYTTNlVnkrVlZmRGdsRzU3UVhGTjdsdDhnQTV4aW5tMVMyQnVoMkFNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNzYyMDg1NzkzMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCOTdFRDI0OTM5NUE0RTlGRjEwNjU1Qzc2NjJCNDVBQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5ODExNDE3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzc2MjA4NTc5MzBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTEyNkJDNDMzOTg2MURBMENGMEQ1OTZCNjY3RUJBNzEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTgxMTQxN31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoid2JOcmszTURUNm1uTDUzbTNKNHRmdyIsInBob25lSWQiOiIxZTlhZjIwYS1hYTA5LTQzNDMtODhiZS02ZDhkODIxNWZmOTQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSm9FVFMxSUlIV3Z5KysyVTZyQm0wSnNtdjQ0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBTYTdpNlJxcEtlSnJSVEdiSExCVUU1Snl3ND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIyTTI0WEY2NCIsImxhc3RQcm9wSGFzaCI6IjF5aElSQSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBPT0ifSwibWUiOnsiaWQiOiIyMzc2MjA4NTc5MzA6MjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQW5kcmVhcyIsImxpZCI6IjExMDI1MjIyOTkyMjk3NDoyMUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0luaGcvc0dFTkg2aUxRR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im95Mm9CeGE5Zlp1VU43ZG45Y3pNTGxIL0RZWnZNWnhFSno0RGhuTHJjbVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImVadi9ZTnRNajFicDJBeG5lR2s5MU9Ca3RKRXp6TW5zc2h3RjE3ek02MWdDQ2tOQjAzNGRDZ0tNckFsQkFUR08xRmNQbmxCZGZ2eWZSOEJodVFldkNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIwbjV4WVQ1ZU0xN2d3djQ1QzRUMVBCMjlxZjRXNExvQ3ZPcjk5T0t5M1FCUGxac1VMWDk4dktOdTlEYnE5Ui9Id3RWNWdxZGRyYWJ3REMzU0RLYnhnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzYyMDg1NzkzMDoyMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhTXRxQWNXdlgyYmxEZTNaL1hNekM1Ui93MkdiekdjUkNjK0E0Wnk2M0ptIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5ODExNDEyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9SbCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || '.',
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©Richy-Md",
  author: process.env.PACK_AUTHER || "🕊",
  packname: process.env.PACK_NAME || "Richy-Md",
  botname: process.env.BOT_NAME || "Richy-Md",
  ownername: process.env.OWNER_NAME || "Richy",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
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
