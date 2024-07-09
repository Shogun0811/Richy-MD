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
global.owner = process.env.OWNER_NUMBER || "22170263631";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUhKd3dhR3d1N0lwK2I3cW16WDJKOThONzgvWUIxWVRVVjRyeDBmRXUyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieHFFQ25KOHlRQm5uZWxLN1JBVzc4ZXR3SUdkQUprTWhJa2JzYTBhc2x6dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRE9teUNxdDZaRGNEL29VT0dIKzlTVU1Dd2hXaFBYeERYNXArSU8ybUhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIU0ZjR21STFhRRlM5K0dzWWdwQWMwMzhXcFhIYjNtbmRnUW1OMjF2THpZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklCLys3ckpKR1dQQWVwcGp2czNhNHJIU3ZINWtha3VGeUUvVVMrK25FbGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxGdzNHTkV1WUNtUGJaNW0wWnJyb2tUMWlsdzVCWi95SDBqN3BiNWRObWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUE0TlFnK3FDUEl1SDl4UW9qSXgyUHFxYWN5VnFJeTI4U3ZlNS9nQWtIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkRJaWF4ay92RDlReTJUSnZkejlRV2ZBVDdyTzBoTm44NEhhL2pIY0tROD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InUxRklHb0tCNVltNDk1S05CTDYyTmNxcTdUSm5semlzNUZpN003L3JSVFdSUVZqdDFNWXY2MVhoYWdGSmRzZmlpd0loYVdYbHYwMTIzRk51M3YyNkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NywiYWR2U2VjcmV0S2V5IjoiQ2VNWlFHbTBWT2tpV2pDRmJCa1hMVWp4WnR2QS9JaTRCd1BJYjFTVjEvST0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyMjE3NjAyNjM2MzFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzkxMzE5RjY3QjIzODcyREFGRTk0RjBEODlGMDMxRjEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDUyNTk5Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZ2xZLTh4UUdTVnlEV3FFQS1VVVJvdyIsInBob25lSWQiOiJiMmViNzA3Mi03MGJlLTRmMjctYjY3YS0wZjJhMmVlMzg2NTQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGFTeTRmV3l4d08wMXdyVE44M1RMUWlvZW8wPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4RWdCSHVoYStLRVVPbm8raVNhdWpqY0tydkU9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNKbU14dndIRUtMSnRMUUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIrV2pzaUt1TkQyaS9sVVZJVTROZFhUT2RkdVZjM2wxQ1V2eXdhRlFQU2hFPSIsImFjY291bnRTaWduYXR1cmUiOiJqUm1xOFIzdUk4bGlRQ1BMcUVXWGZ4QW8rNGFWRjdqRjdTYklzMzE3Z21uVkVLZktsVzRCZlFObk5WcE03RE1rSVhJSlFkTE90dE84UEtTcWloejhEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieWl0enpZSWdxL0ZLYWVYZk95S2RvZHNKQ2FRYy9mQTlSZEVmMGtLbDhpeW1hK3BjbGg5NjZPbFd6bS8wYU05dTQ5OGdCSHBYc0pWQVBERHBtdG8xQVE9PSJ9LCJtZSI6eyJpZCI6IjIyMTc2MDI2MzYzMTozOEBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjE3NjAyNjM2MzE6MzhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmxvN0lpcmpROW92NVZGU0ZPRFhWMHpuWGJsWE41ZFFsTDhzR2hVRDBvUiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDUyNTk4OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCRjcifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || '+',
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©Richy-MD",
  author: process.env.PACK_AUTHER || "🕊",
  packname: process.env.PACK_NAME || "BICOM LAB",
  botname: process.env.BOT_NAME || "Richy-Md",
  ownername: process.env.OWNER_NAME || "Bicomaru Shogunaī",
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
