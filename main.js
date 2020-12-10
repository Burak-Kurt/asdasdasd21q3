const express = require("express");
const http = require("http");
const app = express();
app.get("/", (request, response) => {
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_NAME}.glitch.me`);
}, 1000 * 60 * 3);
const Discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const client = new Discord.Client();
const settings = require("./settings.json");
let talkedRecently = new Set();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.on("ready", async () => {
  
    console.log(`${client.user.username} Is Now Online!`);
    
      client.user.setActivity('🔥 Yardım Menüsü => v!yardım');
    
       console.log(`Vorix Is Serving For ` + client.channels.cache.size + ` Channels ` + client.guilds.cache.size + ` Guilds And ` + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` Peoples!`);

  });

  fs.readdir('./commands/', (err, files) => {
    if (err) 
    return console.error(err);

    console.log(`${files.length} Yüklemeye Hazırlanılıyor!`);
    files.forEach(f => {
      let props = require(`./commands/${f}`);
      console.log(`Yüklenen Komut : ${props.help.name}`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
    });
  });

//events/message.js kısmı
  client.on("message", async message => {
    if (talkedRecently.has(message.author.id)) {
      return;
    }
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 1500);
    let client = message.client;
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (!message.content.startsWith(settings.Prefix)) return;
  let command = message.content.split(' ')[0].slice(settings.Prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

  })
  
  client.elevation = message => {
    if(!message.guild) {
    return; }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === settings.Owner) permlvl = 4;
    return permlvl;
  };
  
  client.on("error", (e) => console.error(e));
  
  
client.login(settings.Token);

//sa-as
client.on('message', async (message,member) => {
  const sas = await db.fetch(`saas_${message.guild.id}`)
  if(!sas || sas===null) return
  if(message.author.bot === true) { return
   }else { if(message.content.toLowerCase() ==='sa'||message.content.toLowerCase() ==='sea'||message.content.toLowerCase() ==='selam'||message.content.toLowerCase() ==='selamun aleykum'||message.content.toLowerCase() ==='selamun aleyküm'||message.content.includes === `Esselamın aleyküme rahmetullahı berekatühü`){
  message.reply('Aleyküm Selam')
}
}})

