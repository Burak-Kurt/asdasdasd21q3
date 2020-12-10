const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('<:bot:782352553379495966> Vorix Bot - Yardım Menüsü')
.setTimestamp()
.setImage("https://cdn.discordapp.com/attachments/745934281523593267/773292086924673074/standard_1.gif")
.addField('<:pembekitap:768721140570652713> Eğlence Komutları **[6]**', '``8ball``, ``1vs1``, ``sltos``, ``balıktut``, ``espiri``, ``taksim``')
.addField('<:yesilkitap:768721140129726486> Moderasyon Komutları **[10]**', '``ban``, ``kick``, ``sil``, ``oylama``, ``uyarı``, ``uyarı-sil``, ``uyarılar``, ``mute``, ``mute-rol``, ``yaz``, ``sa-as``')
.addField('<:mavikitap:768721140146503682> Genel Komutları **[6]**', '``avatar``, ``bot``, ``sahip``, ``istek``, ``öneri``, ``sunucu-bilgi``')
.addField('<:kirmizikitap:768721140582449172> Logo Komutları **[8]**', '``logo1``, ``logo2``, ``logo3``, ``logo4``, ``logo5``, ``logo6``, ``logo7``, ``logo8``')
.setDescription(`**[[Davet Et]](https://discord.com/api/oauth2/authorize?client_id=742835149846085692&permissions=8&scope=bot)** **[[Destek Sunucusu]](https://discord.gg/KefFyvrFvB)**`)
.setFooter('Vorix Bot ', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
 