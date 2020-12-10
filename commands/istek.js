const Discord = require("discord.js")

exports.run = async(client, message, args) => {
  
  let istek = args.slice(0).join(" ")
  
  const bisiyaz = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir İstek Belirtmelisin`, message.author.avatarURL());
  
  if (!istek) return message.channel.send(bisiyaz)
  
  const tm = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`İsteğiniz Gönderildi`, message.author.avatarURL());

  message.delete(5000)
  message.channel.send(tm)
  
  const istegi = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Yeni Bir İstek Geldi!")
  .addField(`Kullanıcı:`, `${message.author.tag}`)
  .addField(`Kullanıcı ID:`, `${message.author.id}`)
  .addField(`Kullanıcı İstek:`, `${istek}`)
  
  client.channels.get("768195126186475571").send(istegi)
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["istek"],
  perm: 0
}

exports.help = {
  name: "istek",
  description: "İstek",
  usage: "t!öneri öneri"
}