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
  "RICHY-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0t3OEFqV1p4RFhRdktyUVE0VllxSHE4cXlrNnhOam1LWGpEc3FtZ1ZIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2NzVjFvWXhvYStMWGdNblU0dWRreVNlWmRuZERNcE5SS1FTVFpQOS9CMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLUFlySXJjYWl5VjNmTWlscnBNMmpvaW5GOS9HaU5KajFzNU04Q3V4M0c0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHd0tuUVlabVA1eTZGdjVockZQNnIyUGMyZ2NYOUZkVjdmcEpOQW9TN3lzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1OcTkxRUcxWHhocnhhVFUxUWFOUHFaNVpRUUtaSmVRNWdFOEFNcm1uVk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlZNkZnRHp6SnNaaTlSWldsNmVSTW1vQTdUN0IyNkpjS2dKQkJXc2xhREE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUdXTStDN0tQOUdnVGl1YmhGK1M1R2dHQXYyMjJRdjdwWkcvanY1TXQxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3AydEc1NDhQd2RBN0Y3MC9pdVdpdFJxaFJLdnQyemVSK3U5SnBaaXd4Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklCSWpHSEJSSVBrSVVIVHpsTDdCZk9ReHBFbUp0ZS9pWjQ0U0tWMlpwTjBCSUhFbGZibktMQ3AwVlMxNnk1YjcwRDlRS2MxZHVNREM1QW0yYWFGMEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTIsImFkdlNlY3JldEtleSI6IjljODFGQ25hb3d3QXJ4V09OVFh0VHFkR2tDQ3FUMjcyS1NRUjMwMWN2NFk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjoxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJheEtrNkh0OFFyZXpzVzlGMHlVMGxnIiwicGhvbmVJZCI6ImRjZGE5Y2M3LTJhMGYtNDY1ZC1iYWQ4LTlkMWI0MzU1MTE0YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmTHdoQUd0bUpGSkd3Ymxwcm1UTHpJOE5kKzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0k2TzgvWkdDWnplT0ttakQ1c1JJc1JzenJJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBHMkM3TlJYIiwibWUiOnsiaWQiOiIyMzc2MjA4NTc5MzA6MjRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0luaGcvc0dFTHVrajdRR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im95Mm9CeGE5Zlp1VU43ZG45Y3pNTGxIL0RZWnZNWnhFSno0RGhuTHJjbVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjBWNWlwMXhJVjVUckFxazNoRkhMS2prWlNkTnNnK3lrMkY0TmdUeHJ3bUdGSzVoelRuVWN3Um5kK3drYUxrNENaM21xTFVtNVUrTWxUQjRZdlBRN0R3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHQmVWV3dtemd4ZEs2dlpraXZibVVYWTVIV1ljSUhObmdwd3JQWFRSb3hTa3RqZnF2YmUrUDJjaHRPcFNPZno1a0NMNjAwN0NnVFhqOXdBSi8yWmVCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzYyMDg1NzkzMDoyNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhTXRxQWNXdlgyYmxEZTNaL1hNekM1Ui93MkdiekdjUkNjK0E0Wnk2M0ptIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIn0="
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
