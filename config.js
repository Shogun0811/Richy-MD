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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0V0UGh0WWdVaEZiS1hLWjRpVUZtb3JHNjdPNUhsNHgrQTRvMXRDaGpFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRElBSmg3WllHNnpqR1E0dzBzZTZjeXpGZ0xHaS9uTlIvM0ozVlZqbURnST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTlFKTDhHdWRXbVViMHNmdVRKWkliZXhmSlhEWk5xL0hyRms3eW1zSzMwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIZkkyeDl6NytPemtQUW5rV1psRW1vdndKMXI5Lzk2dkZDK0FhTkNKYTA4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRBMS9ucVlnczgyY0w5TEdobGZxZm1STDBoTjRoZ0xwb1NpOWNrNWlmSG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imc5WGVtUENVZ0xUWS80RDZWMzdDVHN0aFpwNXc4MVJabjFOVHZCTHg3Q2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0k0S1p2eHBVbHk0YTN1RS9aajlHZC85MW41MGJ6QUtwTkdVQisyejduQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieE52OEpremZNTmJNdjFzR1VRbzA2ZmVxNDhjR1ZndUJMMVcxSkEzbTBCQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFiV0c4a0Y4bnFBRW5kekswcWlxUVBFbXBuZVpxOU1jMi9pSG5jOGVnYnkzaDFuUGw2dFZaZDVhQzYrUEZWbGc1YWhndmZBcWpiZStPWGdJVnRvdURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE2LCJhZHZTZWNyZXRLZXkiOiJFd2hUaVh3YmdiN2pZdGV6U0I1VVJIdkdLajV4Y0Nsb0RNUERaSkowbFNVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNzY1ODcyNzMwNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJERTREODM1M0JBREY3MUFENzIxMERGNkNFNDI2NjEzNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMzUyMTg1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4ZmN0bDFxM1FxS2VmQ00tV05pOWF3IiwicGhvbmVJZCI6IjZjZTdlM2VhLTY0NmItNDY0YS05ZmE1LWE4MDY3ODgzOGJiNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwYnFSRDNVWVdDNmZBeUp6KzhyOFZJYzNFY3M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlZZOGVCWmM3WnNZYm1LMmRWd2RhQkhadHBRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdSUE4yV0tTIiwibGFzdFByb3BIYXNoIjoiMXloSVJBIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQlE9PSJ9LCJtZSI6eyJpZCI6IjIzNzY1ODcyNzMwNTo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Illhbm4iLCJsaWQiOiIyMjk4NjI5MDg0MDM3NjE6NUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05iems2c0VFTEg3cWJRR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlU0YnRYREVYUU84S0VYa21vclJvaE5SZk5NUm5wUExjR0NlN0RXdG45d289IiwiYWNjb3VudFNpZ25hdHVyZSI6IkdqYnB5V0pJK1pvZjYwTld2SVNqMHd6OExncktsdDZIVFpvYVVkOFQyQlNyb2pOZk53ZnBpc3NWbFJqTzNpc1ZVMmxtQXRTaUxjK2MrdHhtbzFhMEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJOMFpHZWxzcFFFMnRncHo3M3p6dFcwK0Qzd3VTazgreTBrVkl6ZnE3SEtORFFoalJFU0E2WVhBbjVUNzBtNkVmbXlkcGJrV2lMdHVPQXl3MVJCMjdEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY1ODcyNzMwNTo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZPRzdWd3hGMER2Q2hGNUpxSzBhSVRVWHpURVo2VHkzQmdudXcxclovY0sifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAzNTIxODAsIm15QXBwU3RhdGVLZXlJZCI6IkFBSUFBRnplIn0="
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
