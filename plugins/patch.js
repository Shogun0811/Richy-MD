const os = require("os");
const fs = require("fs");
const Config = require("../config");
const translatte = require("translatte");
const cron = require("node-cron");
var cronStart = false;
const cpuModel = os.cpus()[0].model;
const axios = require("axios");
let {
  fancytext,
  tlang,
  runtime,
  formatp,
  prefix,
  tiny,
  smd,
  bot,
} = require("../lib");
const util = require("util");
const { cmd } = require("../lib/plugins");
const astro_patch = require("../lib/plugins");
const events = astro_patch;
const { exec } = require("child_process");
let s_ser = true;
const long = String.fromCharCode(8206);
const readmore = long.repeat(4001);
const trend_usage = (() => {
  const trendNumber = ((min, max) => {
    const random = () => Math.random();
    const floor = (x) => Math.floor(x);
    const multiply = (a, b) => a * b;
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const randomValue = multiply(random(), subtract(max, min + 1));
    const result = add(floor(randomValue), min);
    return result;
  })(1, 99);
  return trendNumber;
})();

const database_info = (() => {
  const dbNumber = ((min, max) => {
    const random = () => Math.random();
    const floor = (x) => Math.floor(x);
    const multiply = (a, b) => a * b;
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const randomValue = multiply(random(), subtract(max, min + 1));
    const result = add(floor(randomValue), min);
    return result;
  })(1, 499);
  return dbNumber;
})();
// Execute dmidecode command
exec('dmidecode -t memory', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing dmidecode: ${error}`);
    return;
  }

  if (stderr) {
    console.error(`Error: ${stderr}`);
    return;
  }

  // Parse the output to extract RAM information
  const ramInfo = parseDmiDecodeOutput(stdout);
  console.log("RAM Information:", ramInfo);
});

// Function to parse dmidecode output
function parseDmiDecodeOutput(output) {
  const ramInfo = {};

  // Example parsing logic, adjust as needed based on the output format
  // Here, we're assuming each RAM module starts with "Memory Device"
  const memoryDevices = output.split('Memory Device');

  for (let i = 1; i < memoryDevices.length; i++) {
    const deviceInfo = memoryDevices[i];
    // Extract relevant information from deviceInfo and populate ramInfo object
    // Example: Extracting size, type, speed, etc.
  }

  return ramInfo;
}
/*
smd(
  {
    cmdname: "update",
    type: "owner",
    info: "Installs external modules or plugins from a provided URL or a predefined list.",
    fromMe: s_ser,
    filename: __filename,
    use: "<gist url>",
  },
  async (message, args) => {
    try {
      let pluginNames = [];
      let pluginUrls = {};
      let pluginExtensions = {};

      try {
        const { data: response } = await axios.get(
          "https://gist.githubusercontent.com/Ednut001/c87ac3fa5ce0017deb8080544de9bd26/raw"
        );
        pluginUrls = {
          ...(typeof response.external === "object" ? response.external : {}),
          ...(typeof response.plugins === "object" ? response.plugins : {}),
        };
        pluginNames = response.names;
        pluginExtensions =
          response.extension && typeof response.extension === "object"
            ? response.extension
            : {};
      } catch (error) {
        pluginUrls = {};
      }

      pluginNames = Array.isArray(pluginNames) ? pluginNames : [];

      if (bot && bot.plugins) {
        await send.message("Downloading Update");
        pluginUrls = { ...bot.plugins, ...pluginUrls };
      }

      let url = args ? args : message.quoted ? message.quoted.text : "";
      if (url.toLowerCase().includes("https")) {
        try {
          const { data: pluginCode } = await axios.get(url);
          const pluginName = url.split("/").pop().split(".")[0];
          const pluginFileName =
            pluginName +
            (pluginExtensions[pluginName] &&
            /.js|.smd/gi.test(pluginExtensions[pluginName])
              ? pluginExtensions[pluginName]
              : ".js");
          const pluginDir =
            plugin_dir +
            (pluginFileName.includes("/") ? pluginFileName.split("/")[0] : "");

          if (!fs.existsSync(pluginDir)) {
            fs.mkdirSync(pluginDir, { recursive: true });
          }

          fs.writeFileSync(plugin_dir + pluginFileName, pluginCode, "utf8");
          log(" " + pluginName + " ✔️");
        } catch (error) {
          log(" " + pluginName + " ❌");
        }
      } else if (Object.keys(pluginUrls || {}).length > 0) {
        const externalPlugins = pluginUrls;

        for (const pluginName in externalPlugins) {
          try {
            const pluginUrl = externalPlugins[pluginName].includes("raw")
              ? externalPlugins[pluginName]
              : externalPlugins[pluginName] + "/raw";
            const { data: pluginCode } = await axios.get(pluginUrl);

            if (pluginCode) {
              const pluginFileName =
                pluginName +
                (pluginExtensions[pluginName] &&
                /.js|.smd/gi.test(pluginExtensions[pluginName])
                  ? pluginExtensions[pluginName]
                  : ".js");
              const pluginDir =
                plugin_dir +
                (pluginFileName.includes("/")
                  ? pluginFileName.split("/")[0]
                  : "");

              if (!fs.existsSync(pluginDir)) {
                fs.mkdirSync(pluginDir, { recursive: true });
              }

              fs.writeFileSync(plugin_dir + pluginFileName, pluginCode, "utf8");

              if (!pluginNames.includes(pluginName)) {
                log(" " + pluginName + " ✔️");
              }
            }
          } catch (error) {
            if (!pluginNames.includes(pluginName)) {
              log(" " + pluginName + " ❌");
            }
          }
        }

        return await message.send("`RICHY MD SUCCESSFULL COMPLETED✅`");
      } else {
        return await message.send(
          "*Auto Updated Failed, Unable to Download Update Please Manually Do It*"
        );
      }
    } catch (error) {
      log("❌ ERROR INSTALATION PLUGINS ", error);
    }
  }
); */
astro_patch.smd(
  {
    cmdname: "menu",
    desc: "Help list",
    react: "🍷",
    desc: "To show all avaiable commands.",
    type: "user",
    filename: __filename,
  },
  async (message, input) => {
    try {
      const { commands } = require("../lib");
      if (input.split(" ")[0]) {
        let commandDetails = [];
        const foundCommand = commands.find(
          (cmd) => cmd.pattern === input.split(" ")[0].toLowerCase()
        );
        if (foundCommand) {
          commandDetails.push("*🔉Command:* " + foundCommand.pattern);
          if (foundCommand.category) {
            commandDetails.push("*💁Category:* " + foundCommand.category);
          }
          if (foundCommand.alias && foundCommand.alias[0]) {
            commandDetails.push("*💁Alias:* " + foundCommand.alias.join(", "));
          }
          if (foundCommand.desc) {
            commandDetails.push("*💁Description:* " + foundCommand.desc);
          }
          if (foundCommand.use) {
            commandDetails.push(
              "*〽️Usage:*\n ```" +
                prefix +
                foundCommand.pattern +
                " " +
                foundCommand.use +
                "```"
            );
          }
          if (foundCommand.usage) {
            commandDetails.push(
              "*〽️Usage:*\n ```" + foundCommand.usage + "```"
            );
          }
          await message.reply(commandDetails.join("\n"));
        }
      }

      let menuThemeType;
      let menuThemeHeader;
      let menuThemeFooter;
      let menuThemeCategoryHeader;
      let menuThemeCategoryFooter;
      let menuThemeCommandPrefix;
      let menuThemeCommandFooter;

      if (Config.menu === "") {
        menuThemeType = Math.floor(Math.random() * 4) + 1;
      }

      if (
        menuThemeType === 1 ||
        Config.menu.trim().startsWith("1") ||
        Config.menu.toLowerCase().includes("menu1")
      ) {
        menuThemeHeader = "╭═══ *RICHY-MD* ═══⊷\n┃⛥╭──────────────⊷";
        menuThemeCommandPrefix = "   │";
        menuThemeFooter = "┃⛥╰───────────────⊷\n╰═════════════════⊷";
        menuThemeCategoryHeader = "╭『 ";
        menuThemeCategoryFooter = "』";
        menuThemeCommandPrefix = "   ➣";
        menuThemeCommandFooter = "   ╰─────────────────⊷ ";
      } else if (
        menuThemeType === 2 ||
        Config.menu.trim().startsWith("2") ||
        Config.menu.toLowerCase().includes("menu2")
      ) {
        menuThemeHeader = "╭═══ *RICHY-MD* ═══⊷\n┃⛥╭──────────────✘";
        menuThemeCommandPrefix = "   │";
        menuThemeFooter = "┃⛥╰───────────────\n╰═════════════════⊷";
        menuThemeCategoryHeader = "╭─『";
        menuThemeCategoryFooter = "』";
        menuThemeCommandPrefix = "   ➣";
        menuThemeCommandFooter = "   ╰─────────────────⊷ ";
      } else {
        menuThemeHeader = "╭═══ *RICHY-MD* ═══⊷\n┃⛥╭──────────────⊷";
        menuThemeCommandPrefix = "   │";
        menuThemeFooter = "┃⛥╰───────────────⊷\n╰═════════════════❍";
        menuThemeCategoryHeader = "╭─『";
        menuThemeCategoryFooter = "』";
        menuThemeCommandPrefix = "   ➣";
        menuThemeCommandFooter = "   ╰─────────────────⊷ ";
      }

      const categorizedCommands = {};
      commands.map(async (command) => {
        if (
          command.dontAddCommandList === false &&
          command.pattern !== undefined
        ) {
          if (!categorizedCommands[command.category]) {
            categorizedCommands[command.category] = [];
          }
          categorizedCommands[command.category].push(command.pattern);
        }
      });

      const currentTime = message.time;
      const currentDate = message.date;
    /*  let menuText = `
${menuThemeHeader}
${menuThemeCommandPrefix} │Prefix: ${Config.HANDLERS}
${menuThemeCommandPrefix} │User: ${Config.ownername}
${menuThemeCommandPrefix} │ᴛɪᴍᴇ: ${currentTime}
${menuThemeCommandPrefix} │Day: ;-;
${menuThemeCommandPrefix} │ᴅᴀᴛᴇ: ${currentDate}
${menuThemeCommandPrefix} │Version: 1.0.0
${menuThemeCommandPrefix} │Plugins: 300+
${menuThemeCommandPrefix} │Ram: ${formatp(os.totalmem() - os.freemem())} 
${menuThemeCommandPrefix} │Uptime: ${runtime(process.uptime())}
${menuThemeFooter}                         
`;*/
      let menuText = `
╭═════❖𝙍𝙄𝘾𝙃𝙔-𝙈𝘿❖═════⊷
┃❍╭──────────────❍
┃⛥│➣Prefix: ${Config.HANDLERS}
┃⛥│➣User: ${Config.ownername}
┃⛥│➣ᴛɪᴍᴇ: ${currentTime}
┃⛥│➣ᴅᴀᴛᴇ: ${currentDate}
┃⛥│➣Version: 1.0.0                        
┃⛥└───────────────❍
┃⛥╭───────────────❍
┃⛥│➣Plugins:  400
┃⛥│➣Ram: ${formatp(os.totalmem() - os.freemem())} 
┃⛥│➣Uptime: ${runtime(process.uptime())}
┃⛥│➣Develloper: SLG
┃❍╰───────────────❍
╰═════════════════⊷
│ *by richy team*
└┬❍
┌┤✑worktype: ${Config.WORKTYPE}
│└────────────┈ ❍     
│© *RICHY-MD*
└─────────────────┈❍
   
     > 𝑅𝛪𝐶𝛨𝑌-𝛭𝐷 𝛻1.7.5 𝐿𝛥𝑆𝑇𝛯𝑆𝑇
     > 𝛲𝛩𝑊𝛯𝑅𝛯𝐷 𝐵𝑌 𝑅𝛪𝐶𝛨𝑌 𝑇𝛯𝐶𝛨
${readmore}`
           `
     > Don t forget ton follow m'y github 

      
     > Type allmenu for my cmds
        `

    

      for (const category in categorizedCommands) {
        menuText += `
        ${menuThemeCategoryHeader} *${tiny(
          category
        )}* ${menuThemeCategoryFooter}\n`;
        if (input.toLowerCase() === category.toLowerCase()) {
          menuText = `${menuThemeCategoryHeader} *${tiny(
            category
          )}* ${menuThemeCategoryFooter}\n`;
          for (const command of categorizedCommands[category]) {
            menuText += `${menuThemeCommandPrefix} ${tiny(
              command,
              1
            )}\n`;
          }
          menuText += `${menuThemeCommandFooter}\n`;
          break;
        } else {
          for (const command of categorizedCommands[category]) {
            menuText += `${menuThemeCommandPrefix} ${tiny(
              command,
              1
            )}\n`;
          }
          menuText += `${menuThemeCommandFooter}\n`;
        }
      }
      //menuText += Config.caption;

      const messageOptions = {
        caption: menuText
      };
      //return await Void.sendMessage(message.chat, menuText);
      return await message.bot.sendUi(message.from, { text: menuText})
    } catch (error) {
      await message.error(error + "\nCommand: menu", error);
    }
  }
);
/*smd(
  {
    pattern: "menus",
    type: "MENU list",
    info: "user",
    dontAddCommandList: true,
  },
  async (_0x22514a) => {
    try {
      let _0x20ed34 = (
        "\n*➮ᴜᴘ ᴛɪᴍᴇ :* " +
        runtime(process.uptime()) +
        "\n*➮ᴛᴏᴅᴀʏ ɪs :* " +
        _0x22514a.date +
        "\n*➮ɴᴏᴡ ᴛɪᴍᴇ :* " +
        _0x22514a.time +
        "\n\n➮Fᴏᴜɴᴅᴇʀ- 𝙴𝙳𝙽𝚄𝚃 𝙲𝚁𝙴𝚆\n➮Oᴡɴᴇʀ - " +
        Config.ownername +
        "\n➮Nᴜᴍ - " +
        owner.split(",")[0] +
        "\n➮Mᴇᴍᴏ - " +
        formatp(os.totalmem() - os.freemem()) +
        "/" +
        formatp(os.totalmem()) +
        "\n\n *🧑‍💻 :* Ednut md now active\n\n" +
        readmore +
        "\n╭──❰ *ALL MENU* ❱\n│🏮 Lɪꜱᴛ\n│🏮 Cᴀᴛᴇɢᴏʀʏ\n│🏮 Hᴇʟᴘ\n│🏮 Aʟɪᴠᴇ\n│🏮 Uᴘᴛɪᴍᴇ\n│🏮 Wᴇᴀᴛʜᴇʀ\n│🏮 Lɪɴᴋ\n│🏮 Cᴘᴜ\n│🏮 Rᴇᴘᴏꜱɪᴛᴏʀʏ\n╰─────────────⦁"
      ).trim();
      return await _0x22514a.bot.sendUi(_0x22514a.from, {
        caption: _0x20ed34,
      });
    } catch (_0x450fce) {
      await _0x22514a.error(_0x450fce + "\nCommand:menus", _0x450fce);
    }
  }
);*/
astro_patch.cmd(
  {
    pattern: "setcmd",
    desc: "To check ping",
    category: "user",
    fromMe: true,
    filename: __filename,
  },
  async (_0x5d887, _0x291296, { Void: _0x43ee74 }) => {
    try {
      if (!_0x291296) {
        return await _0x5d887.send(
          "*_Please provide cmd name by replying a Sticker_*"
        );
      }
      let _0x584a9e = _0x291296.split(",");
      var _0x5b0dfd;
      var _0x3be11d;
      let _0x17bd8a = false;
      if (_0x5d887.quoted) {
        let _0x1f29ea = _0x5d887.quoted.mtype;
        if (_0x1f29ea == "stickerMessage" && _0x291296) {
          _0x17bd8a = true;
          _0x5b0dfd = _0x291296.split(" ")[0];
          _0x3be11d = "sticker-" + _0x5d887.quoted.msg.fileSha256;
        }
      }
      if (!_0x17bd8a && _0x584a9e.length > 1) {
        _0x3be11d = _0x584a9e[0].trim().toLowerCase();
        _0x5b0dfd = _0x584a9e[1].trim().toLowerCase();
      } else if (!_0x17bd8a) {
        return await _0x5d887.send(
          "*_Uhh Dear, Give Cmd With New Name_*\n*Eg: _.setcmd New_Name, Cmd_Name_*"
        );
      }
      if (_0x3be11d.length < 1) {
        return await _0x5d887.reply(
          "*_Uhh Please, Provide New_Cmd Name First_*"
        );
      }
      if (global.setCmdAlias[_0x3be11d]) {
        return await _0x5d887.send(
          '*_"' +
            (_0x17bd8a ? "Given Sticker" : _0x3be11d) +
            '" Already set for "' +
            global.setCmdAlias[_0x3be11d] +
            '" Cmd, Please try another ' +
            (_0x17bd8a ? "Sticker" : "Name") +
            "_*"
        );
      }
      const _0x8e739e =
        astro_patch.commands.find(
          (_0xd9686c) => _0xd9686c.pattern === _0x5b0dfd
        ) ||
        astro_patch.commands.find(
          (_0x31fef3) => _0x31fef3.alias && _0x31fef3.alias.includes(_0x5b0dfd)
        );
      if (_0x8e739e) {
        global.setCmdAlias[_0x3be11d] = _0x8e739e.pattern;
        return await _0x5d887.send(
          '*_Cmd "' +
            global.setCmdAlias[_0x3be11d] +
            '" Succesfully set to "' +
            (_0x17bd8a ? "Sticker" : _0x3be11d) +
            '"._*\n*_These all names are reset, If bot restart_*'
        );
      } else {
        return await _0x5d887.send(
          "*_Provided Cmd( " +
            _0x5b0dfd +
            ") not found in bot cmds. Please Provide Valid cmd Name_*"
        );
      }
    } catch (_0x13e052) {
      await _0x5d887.error(_0x13e052 + "\nCommand:setcmd", _0x13e052);
    }
  }
);
astro_patch.cmd(
  {
    pattern: "delcmd",
    desc: "To check ping",
    category: "user",
    fromMe: true,
    filename: __filename,
  },
  async (_0xcfb3ed, _0x5c72db, { Void: _0x5c00fc }) => {
    try {
      let _0xf7499f = _0x5c72db
        ? _0x5c72db.split(" ")[0].trim().toLowerCase()
        : "";
      let _0x5dd184 = false;
      if (_0xcfb3ed.quoted) {
        if (_0xcfb3ed.quoted.mtype == "stickerMessage") {
          _0x5dd184 = true;
          _0xf7499f = "sticker-" + _0xcfb3ed.quoted.msg.fileSha256;
        } else if (!_0x5c72db) {
          return await _0xcfb3ed.send(
            "*_Please reply to a Sticker that set for a Cmd_*"
          );
        }
      } else if (!_0x5c72db) {
        return await _0xcfb3ed.send(
          "*_Uhh Dear, provide Name that set to a cmd_*\n*Eg: _.delcmd Cmd_Name_*"
        );
      }
      if (global.setCmdAlias[_0xf7499f]) {
        await _0xcfb3ed.send(
          '*_"' +
            (_0x5dd184 ? "Given Sticker" : _0xf7499f) +
            '" deleted Succesfully at "' +
            global.setCmdAlias[_0xf7499f] +
            '" cmd_*'
        );
        delete global.setCmdAlias[_0xf7499f];
        return;
      } else {
        return await _0xcfb3ed.send(
          '*_"' +
            (_0x5dd184 ? "Given Sticker" : _0xf7499f) +
            '" not Set for any cmd._*\n *_Please Provide Valid ' +
            (_0x5dd184 ? "Sticker" : "cmd Name") +
            " to delete_*"
        );
      }
    } catch (_0x2252fb) {
      await _0xcfb3ed.error(_0x2252fb + "\nCommand:delcmd", _0x2252fb);
    }
  }
);
astro_patch.smd(
  {
    pattern: "ping",
    desc: "To check ping",
    category: "user",
    filename: __filename,
  },
  async (context) => {
    const startTime = new Date().getTime();
    const { key: messageKey } = await context.reply("Reading◀︎◀︎✔︎");
    const endTime = new Date().getTime();
    const pingTime = endTime - startTime;
    await context.send(
      `*Running on---: ${pingTime} ᴍs*`,
      { edit: messageKey },
      "",
      context
    );
  }
);
smd(
  {
    pattern: "alive",
    desc: "Shows system status with different designs.",
    category: "general",
    filename: __filename,
    use: "alive",
  },
  async (message, input) => {
    try {
      const start = new Date().getTime();
      const designs = [
        async () => {
          const imageBuffer = await axios.get(
            "https://telegra.ph/file/cf2dbeb947cf2a0c90d22.jpg",
            {
              responseType: "arraybuffer",
            }
          );

          const quoteResponse = await axios.get(
            "https://api.maher-zubair.tech/misc/quote"
          );
          const quote = quoteResponse.data;
          if (!quote || quote.status !== 200) {
            return await message.reply("*Failed to fetch a quote.*");
          }

          const quoteText = `\n\n*"${quote.result.body}"*\n_- ${quote.result.author}_`;
          const end = new Date().getTime();
          const pingSeconds = (end - start) / 1000;
          const captionText = `RUCHY-MD\n\n*Speed:* ${pingSeconds} seconds`;

          return { image: imageBuffer.data, caption: captionText };
        },
        async () => {
          const imageBuffer = await axios.get(
            "https://telegra.ph/file/612d8a7d4d13fb2418d41.png",
            {
              responseType: "arraybuffer",
            }
          );

          const factResponse = await axios.get(
            "https://api.maher-zubair.tech/misc/fact"
          );
          const fact = factResponse.data;
          if (!fact || fact.status !== 200) {
            return await message.reply("*Failed to fetch a fact.*");
          }

          const end = new Date().getTime();
          const pingSeconds = (end - start) / 1000;
          const captionText = `RICHY-MD\n\n*Speed:* ${pingSeconds} seconds`;

          return { image: imageBuffer.data, caption: captionText };
        },
        async () => {
          const imageBuffer = await axios.get(
 