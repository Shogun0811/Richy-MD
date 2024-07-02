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
  "RICHY-MD;;;RICHY-MD;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0VuaFdQTU02V1RaZmkwUERPWWVYdVhKaEZ0T1RwdnZrSkUzT3Q1dElYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidnFzWEVkMEdkV1JMR0QwWFhmY0NTT0VWRHozZHhNMVFRRkZlVWtySlptRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTUhocndqSlorOE5PKzA3KzdhTElRT25hYmkzQTM2MFNuNDl3YnF4MldJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvWFM0TzdsSU5lUGV5SVJTOTBGNGdGQkV1YmVvc3RUQ3hhWlkzZW90UGdRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNJcEZlM0Fzay9WdWJoa2hUK2R6VG5VTThLcmRJNVdnTFpxTzlkYVVHblE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhqVHMvbjdKMmFkZ1ZUZlZhMkZFSHZwWnNOZ3ZFU2gzTkNjNzhZS3Jya3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUY5U2dDeVQ2dlZka2VlVkZwRnpqdzQvT0g0VU13RHRnVkdmbmxTUytVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3pOcUVkaHVpQitqRVgvWFVXZUtwQTU3YXJNcGdTWm9wdUh6djMya2pEST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ill1WUFyNVgzb3YvOG5DMnJSdXZEUTJFS2JVR0VUcnlTU3lKS2QrYThBRHBxckUxaDI3YnBlWHlCNVA3UXJHSXZpN3dXWEVGd01MY2RRZUptdEpRUEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY3LCJhZHZTZWNyZXRLZXkiOiJQR0ExTWVDU1l5bTNEZXNTb0wyWkdrZnU4YTFORUMyb3JkUzBLaG9waWJZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNzYyMDg1NzkzMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwMzhBMERGRjk0OUY2M0JEM0QzMURFMTI1QjM3OTFGNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5OTEyNTc3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzc2MjA4NTc5MzBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzJBN0I1MjA3NDRDMTAxNTZGMEU2QUEwMzg2Mzc4MDcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTkxMjU3N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicjdKbUUyWElULWF4ZFNqYlBsNmNmdyIsInBob25lSWQiOiI3ZGY4MDU4OS02N2Y3LTQxNDgtODhiMS1lYmQzOGMwN2ViOGQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVzRUozZU1FS0ZzL0pZZWpUQnJ1N0FHUk1ZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlIrQytlWFR2ZGtsZGNzSXk2akI4bXkyRU51VT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJTVlRYUzhZRiIsImxhc3RQcm9wSGFzaCI6IjF5aElSQSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBPT0ifSwibWUiOnsiaWQiOiIyMzc2MjA4NTc5MzA6MjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQW5kcmVhcyIsImxpZCI6IjExMDI1MjIyOTkyMjk3NDoyMkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0luaGcvc0dFUGlRajdRR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im95Mm9CeGE5Zlp1VU43ZG45Y3pNTGxIL0RZWnZNWnhFSno0RGhuTHJjbVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik8vb0FpWUtYaEE5dkRyeUQzVmwvVUU3U0ZmYm4yaVhYMUYzVk85ZGpDcjNkKzlqSnNvMWxxc0VHc2kzRnNBZndxSEhPZHhUem0rOFlPN1FrM045M0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJXT0ljcXh6WXNTWUtlMWMxYk9YY3oyMFA4Y1JmVE1oQlkydHNZKzNDcEdINHUzc1pudUZVV05rd0puQlR3UjNnR0tsK3V0eGF4TFhpam5DdjY0Zi9CZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzYyMDg1NzkzMDoyMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhTXRxQWNXdlgyYmxEZTNaL1hNekM1Ui93MkdiekdjUkNjK0E0Wnk2M0ptIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5OTEyNTcxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9SbCJ9"
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
