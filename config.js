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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0crbzdjdm5RTkZWSllDaDBtb3hzMXVYSGhIZUNUYXFKSjRFSWdORUpYOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjlEdTZobDZmQTF0YlpuamcwVTcxaGNmYm9UVDlLc01rcTRsbE5zLzIzWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTDZBdThiaVBjckpaLzZvM0drb3hDUFA0Tyt0QmY3QjE0aE5aOTdZMjF3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUdDhzUS9wcGNRZWRaT1psMkRMMGplKzdRT2lXaVMvOTZ2RE1kNmtoVkI0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFOSjMxOXcwVHhGaXRwT2xYVXdNRWhjQUJpdXhrUTVmNDZQUHRMNXd1a009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilo3OG0zWnUwdGIyckRSVWNlWnhNUUQzWUJ2bEhWS3ZNOUc2VnhTR1BEMkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU4yUTlsdXJ0S041UGp5MFYwdURjL1ZNRFlCSG1qcjBocWFlelVjKzhVdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWM4RThoVGdjRm91M0VuV0Vzc0ExYmxiZ1RtbS9lZFZrY2c4WjNtWlMxST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImExa2dlb3UyclQzR3JjVThkNmJ0QndUZ215NWk5MnFoM3NrMlBLaUZRTFB2aWgrdXh1UXBwczJuQzRpN0YvblBOaVBTV09URTJKdjlGRXVoVitDTWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE3LCJhZHZTZWNyZXRLZXkiOiJwK1NqUS9KTHVWRWdJV2U3UHI0YVZnMG5NRHF3cXVYbDMzQzRadFJjc0Y0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzMDBBbXRYVVJhS1NfUWsyQ2kzSG9RIiwicGhvbmVJZCI6IjljNjBhN2MzLTU4N2MtNDE5Mi1hMmFiLWViMDVlNjZmOTdjNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5NWJGRlBOdmRSWFB5OGZybExGblc4NDg3NW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3pLTm5mTksyUEhFcXJ4MlBSYmtOZGNvRE5jPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFIQjY2TlNHIiwibGFzdFByb3BIYXNoIjoiMXloSVJBIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQ0E9PSJ9LCJtZSI6eyJpZCI6IjIzNzYyMDg1NzkzMDoyOEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjExMDI1MjIyOTkyMjk3NDoyOEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0luaGcvc0dFSm40bkxRR0dBc2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im95Mm9CeGE5Zlp1VU43ZG45Y3pNTGxIL0RZWnZNWnhFSno0RGhuTHJjbVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImlRdkxKT01vY21GUThlbUZVR3NHY3VobU9HNEJWbjdDOUxKZk1nL2RZRjVDMGtzMnpTN1dlVFR5TTJHWEk1SWg1UVpWcXlxTlNYSHdnTlFNSXI4VkR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJUeGVnUUdwMGJLcnJmUysvY2hxb29IWmdwSHIyb01MS3h3emQ1Q3NyUDBHZ0tUS3F5OE1ZQU50V2RpTHJ4c3BoaXMxemJqMVdFSE5GM1NPZ3pDcXVqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzYyMDg1NzkzMDoyOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhTXRxQWNXdlgyYmxEZTNaL1hNekM1Ui93MkdiekdjUkNjK0E0Wnk2M0ptIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMTM4NzgyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9SciJ9"
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
