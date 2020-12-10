const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async(client, message, args) => {
  
  const yetkiyok = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bu Komutu Kullanmak İçin Yeterli İzine Sahip Değilsin`, message.author.avatarURL());
  
  if (!message.member.hasPermission ("MANAGE_MESSAGES"))
    return message.channel.send(yetkiyok)
  
  var sebep = args.slice(1).join(" ") || "**Belirtilmemiş**"
  
  const kisiyok = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Kişiyi Etiketlemelisin`, message.author.avatarURL());
  
  var kisi = message.mentions.users.first()
  
  if (!kisi)
    return message.channel.send(kisiyok)
  
  let uyarı = await db.add(`uyarı.${kisi.id+message.guild.id}`, 1)
  
  const tamamdir = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(`Kullanıcı Başarıyla Uyarıldı`, message.author.avatarURL());
  
  message.channel.send(tamamdir)
  
  let modlogkanal = message.guild.channels.find(channel => channel.name === "ceza-takip")
  
  if (!modlogkanal) return;
  
  const sbb = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("**Sunucuda Bir Kullanıcı Uyarıldı!**")
  .addField(`**Uyarılan Kullanıcı:**`, `${kisi}`)
  .addField(`**Kullanıcıyı Uyaran Kişi:**`, `${message.author}`)
  .addField(`**Kullanıcının Uyarılma Sebebi:**`, `${sebep}`)
  .setTimestamp()

  message.guild.channels.get(modlogkanal.id).send(sbb)
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["uyar", "warn", "uyarı"],
  perm: 0
}

exports.help = {
  name: "Uyar",
  description: "Kişiyi Uyarır",
  usage: "+uyar @Kişi Sebep"
}