const Discord = require("discord.js");

const evetembed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription("**👍🏻 | Evet**");

const hayirembed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription("**👎🏼 | Hayır**");

const olabilirembed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription("**👐🏼 | Olabilir**");

const cevaplar = [evetembed, hayirembed, olabilirembed];

exports.run = function(client, message, args) {
  var soru = args.join(" ");

  var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

  const hatayapti = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Bir Soru Belirtmen Gerek`, message.author.avatarURL());

  if (!soru) return message.channel.send(hatayapti);
  else message.channel.send(cevap);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["8ball"],
  perm: 0
}

exports.help = {
  name: "8Ball",
  description: "8Ball a Soru Sorarsınız",
  usage: "+8ball Soru"
  
}