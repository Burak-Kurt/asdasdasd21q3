const Discord = require("discord.js")

exports.run = async(client, message, args) => {
  
  const botblg = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(`${client.user.username} Bot - Sahip Bilgileri`, client.user.avatarURL)
  .addField("<a:discord:768171779948019712> Botun Yapımcısı", "Burak#6924")
  .addField("<:youtube:782352553114337292> Youtube", "xskyburak")
  .addField("<:twitch:768171779868721182> Twitch", "burakkurt_tr")
  .addField("<:instagram:768171780841144381> İnstagram", "burakkurt_tr")
  .addField("<:steam:782352553362849802> Steam", "burakkurt_tr")

  message.channel.send(botblg)
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sahip"],
  perm: 0
}

exports.help = {
  name: "sahip",
  description: "Bot Bilgilerini Gösterir",
  usage: "+bot-bilgi"
}