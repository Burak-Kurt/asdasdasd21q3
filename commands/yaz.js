const Discord = require("discord.js")

exports.run = async(client, message, args) => {
  
  const yetkinyok = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bu Komutu Kullanmak İçin Yeterli İzine Sahip Değilsin`, message.author.avatarURL());
  
  if (!message.member.hasPermission ("MANAGE_MESSAGES"))
    return message.channel.send(yetkinyok)
  
  var yazi = args.slice(0).join(" ")
  
  const birseyyaz = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(`Yazmak İstediğin Şeyi Belirtmelisin`, message.author.avatarURL());
  
  if (!yazi)
    return message.channel.send(birseyyaz)
  
  const mesaj = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${yazi}`)
  
  message.delete()
  message.channel.send(mesaj)
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yaz"],
  perm: 0
}

exports.help = {
  name: "Yaz",
  description: "Bota Mesaj Yazdırır.",
  usage: "+yaz (Yazı)"
}