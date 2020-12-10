const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async(client, message, args) => {
  
  const yetkiyok = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bu Komutu Kullanmak İçin Yeterli İzine Sahip Değilsin`, message.author.avatarURL());
  
  if (!message.member.hasPermission ("ADMINISTRATOR"))
    return message.channel.send(yetkiyok)
  
  var mutrol = message.mentions.roles.first()
  
  const rolyok = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Rol Etiketlemelisin`, message.author.avatarURL());
  
  if (!mutrol)
    return message.channel.send(rolyok)
  
  db.set(`alphamuterol${message.guild.id}`, mutrol.id)
  
  const tmdr = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(`Mute-Rol Ayarlandı`, message.author.avatarURL());
  
  message.channel.send(tmdr)
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mute-rol"],
  perm: 0
}

exports.help = {
  name: "Mute Rol",
  description: "Mute Atınca Verilecek Rolü Ayarlarsınız",
  usage: "+mute-rol @Rol"
}