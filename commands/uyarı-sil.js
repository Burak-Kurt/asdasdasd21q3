const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async(client, message, args) => {
  
  const yetkiyok = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bu Komutu Kullanmak İçin Yeterli İzine Sahip Değilsin`, message.author.avatarURL());
  
  if (!message.member.hasPermission ("MANAGE_MESSAGES"))
    return message.channel.send(yetkiyok)
  
const kisiyok = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Kişiyi Etiketlemelisin`, message.author.avatarURL());
  
  var kisi = message.mentions.users.first()
  
  if (!kisi)
    return message.channel.send(kisiyok)
  
  const uyarisiyok = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bu Kullanıcının Hiç Uyarısı Yok`, message.author.avatarURL());
  
  const tamamdir = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(`Kullanıcıdan Başarıyla Uyarı Silindi`, message.author.avatarURL());
  
  let tm = await db.get(`uyarı.${kisi.id+message.guild.id}`)
  if (!tm || tm == 0) return message.channel.send(uyarisiyok)
  
  await db.add(`uyarı.${kisi.id+message.guild.id}`, -1)
  message.channel.send(tamamdir)
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["uyarı-sil"],
  perm: 0
}

exports.help = {
  name: "Uyarı Sil",
  description: "Kişinin İstediğiniz Kadar Uyarısını Siler",
  usage: "+uyarı-sil @Kişi Miktar"
}