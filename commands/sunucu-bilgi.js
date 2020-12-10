const Discord = require('discord.js');
const main = require('../settings.json');

module.exports.run = async (bot, message, args) => {

  let guild = message.guild;
  let icon = message.guild.iconURL();

  let createdAtRaw = guild.createdAt.toDateString();
  let createdAt = createdAtRaw.split(" ");
  let bots = message.guild.members.cache.filter(m => m.user.bot).size;
  let humans = message.guild.members.cache.filter(m => !m.user.bot).size;
  let channels = message.guild.channels.cache.size;
  let textChannels = message.guild.channels.cache.filter(m => m.type == "text").size;
  let voiceChannels = message.guild.channels.cache.filter(i => i.type == "voice").size;
  let emojis = [];
  guild.emojis.cache.forEach(emoji => {
  emojis.push(`\`${emoji}\``);
  });
  emojis.length === 0 ? emojis = "None" : emojis = emojis.join(", ");

  let roles = [];
  guild.roles.cache.forEach(role => {
    roles.push(`\`${role.name}\``);
  });
  roles = roles.join(", ");

  let embed = new Discord.MessageEmbed()
  .setTitle(`**Sunucu İstatistikleri**`)
  .setColor("GREEN")
  .setThumbnail(icon)
  .addField('**<a:merhaba:768171785736683550> Sunucu İsmi:**', guild.name, true)
  .addField('**<a:hypeaquad:768171779826516020> Sunucu ID:**', guild.id, true)
  .addField('**<a:hypeaquad:768171779826516020> Oluşturma Tarihi:**', `${createdAt[0]} ${createdAt[2]} ${createdAt[1]} ${createdAt[3]}`, true)
  .addField('**<a:hypeaquad:768171779826516020> Bölge:**', guild.region.toUpperCase(), true)
  .addField('**<a:hypeaquad:768171779826516020> Toplam Kişi:**', guild.memberCount, true)
  .addField('**<a:hypeaquad:768171779826516020> Botlar:**', bots, true)
  .addField('**<a:hypeaquad:768171779826516020> Kullanıcılar:**', humans, true)
  .addField('**<a:hypeaquad:768171779826516020> Güvenlik Seviyesi:**', guild.verificationLevel, true)
  .addField('**<a:hypeaquad:768171779826516020> Yazı Kanalları:**', textChannels, true)
  .addField('**<a:hypeaquad:768171779826516020> Ses Kanalları:**', voiceChannels, true)
  .addField(`**<a:hypeaquad:768171779826516020> Roller:**`, `${guild.roles.cache.size}`, true)
  .addField(`**<a:hypeaquad:768171779826516020> Emojiler:**`, `${guild.emojis.cache.size}`, true)

  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-bilgi"],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: 'Sunucu Bilgi',
  usuage: 'sunucu-bilgi'
};