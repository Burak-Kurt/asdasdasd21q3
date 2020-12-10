const Discord = require("discord.js");

exports.run = function(client, message, args) {
  const yetkiyokembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Bu Komutu Kullanmak İçin Yeterli İzine Sahip Değilsin`, message.author.avatarURL());

  const birinietiketleembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Bir Kişiyi Etiketlemelisin`, message.author.avatarURL());

  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(yetkiyokembed);

  const banlanacakkisi = message.mentions.users.first();
  if (!banlanacakkisi) return message.channel.send(birinietiketleembed);

  const yetkilileribanlayamam = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Yetkilileri Sunucudan Atamam!`, message.author.avatarURL());

 if (!message.guild.member(banlanacakkisi).kickable)
   return message.channel.send(yetkilileribanlayamam);

  var sebebi = args.slice(1).join(" ") || "Belirtilmemiş"

  const basariylabanlandi = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Kullanıcı Başarıyla Sunucudan Atıldı`, message.author.avatarURL());

  message.guild.ban(banlanacakkisi);
  message.channel.send(basariylabanlandi);
  
  let modlogkanal = message.guild.channels.find(channel => channel.name === "ceza-takip")
  
  if (!modlogkanal) return;
  
  const sbb = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("**Kullanıcı Sunucudan Yasaklandı!**")
  .addField(`**Atılan Kişi:**`, `${banlanacakkisi}`)
  .addField(`**Atan Kişi:**`, `${message.author}`)
  .addField(`**Sebep:**`, `${sebebi}`)
  .setTimestamp()

  message.guild.channels.get(modlogkanal.id).send(sbb)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kick", "kickle", "at"],
  perm: 0
};

exports.help = {
  name: "Kick",
  description: "Kişiyi Sunucudan Atar",
  usage: "+kick @Kişi Sebep"
};
