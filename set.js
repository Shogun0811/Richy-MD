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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkxnRWtzNlVKYjBHRUhEYjh4WUVDV1cxOWMwbVpiajlDTHBxbGFwN2JYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVBYaDZmMmk0OWxvTDlXRW5GYWZUZ21uZ1BQOGZPQkY5dmFGOE5SK3lTbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSmdlQTlHeUJhOU01YWF1dFllU3dRWEhyT05ySThUS0pNYmE1aEVOeVVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1UmNYYnhlZmxFb2Y0YzFCY3E5d0NGamE4WXU1Z0Z0N2l6eG5pRzJiOEJjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVLSC9lRVFVV3lLNXFyVnQ3NlVIRk1HRkRhRDVmc2FTbC9QQ2c4bTY0Rzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjloN3RQZFJybThndzJFS0pseERxN0xjQlBDa3JMNUxLSU9ETzdmdWdNRkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0haamhPRFJrMWR1dFhJbnh1STlicjZCSlo3VEdoTDlqVFlEekRKMjkxST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUW5tUHl5UmRmN25NQ2k4SWRGTDBQbzN6TGpIaWJOSTJjcC9rQWxQdzZqMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE2Qlh1cTJKV2tISnRieVRYdGhSYnJFcmtPL01rT1lkSGhXekxPRWh3KzhFa2YrbEliRHlhYU93clNqVnM3bUVpVXNQdFM4eWdZejBiY3JvYUE0aml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDIsImFkdlNlY3JldEtleSI6IkVTVU8vZmpZdjJYQVdYWUNsbGhNOEsrZlpGMkEzNkEwU2szWlBoQ2VhWWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlJGV01KYUttUWxHMTVjRXVBTTA0T2ciLCJwaG9uZUlkIjoiNGJkMDcxYzUtYTEzNy00NzAxLTkzOWItOTdmYjUxZmFlMjA3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVVYndKNnBBaWo4bGsvUnpRdjlJMU0rUlpzUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRajhSMkZNVXora1kvRmV1Yis4Sk1VYzhpdEk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNExIUVA0WFEiLCJsYXN0UHJvcEhhc2giOiIxeWhJUkEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElDQT09In0sIm1lIjp7ImlkIjoiMjM3NjIwODU3OTMwOjI1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTEwMjUyMjI5OTIyOTc0OjI1QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSW5oZy9zR0VPZkNrN1FHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoib3kyb0J4YTlmWnVVTjdkbjljek1MbEgvRFladk1aeEVKejREaG5McmNtWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVWErQis2T2EzcjJnZTQrRlhzWllOWllIOEdNb0UwQXNnQmVWYkZ5ekh6SHViblFOZjVtZGNOM0Zxa0Z6NVdPNUdFOTVFTDIrblVhWWVCV2VrbXA0Qnc9PSIsImRldmljZVNpZ25hdHVyZSI6IktEYWZWc3hHUzBQZ1dKeUVjV2VlZmFZUm83L2VRWi9JVUFXV0pZRGdHWnIwMXYrMkUxNVZLMnF5aHpiZi80bnZuY3ZxS0ZyUStUSG8vRC9HemdMUmlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjIwODU3OTMwOjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFNdHFBY1d2WDJibERlM1ovWE16QzVSL3cyR2J6R2NSQ2MrQTRaeTYzSm0ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk5ODQ0OTAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT1JtIn0="
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
