const Discord = require("discord.js");
exports.run = function(client, message, args) {
  const miktarbelirt = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor("Silinecek Mesaj Miktarını Belirtmen Gerek", message.author.avatarURL());
  
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("Bu Komutu Kullanmak İçin Yeterli İzine Sahip Değilsin");
  if (!args[0])
    return message.channel.send(miktarbelirt);
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel
      .send(`**<:greentick:781262503521943572> | ${args[0]} Adet Mesajı Sildim.**`)
      .then(msg => msg.delete(5000));
    const botunmesajyonet = new Discord.MessageEmbed();
    let messagecount = parseInt(args.join(" "));
    message.channel
      .fetchMessages({
        limit: messagecount
      })
      .then(messages => message.channel.bulkDelete(messages));
    const sohbetsilindi = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**<:vorixright:781174618488438814> | Eylem:**", "**Mesaj Silme**")
      .addField("**<:vorixright:781174618488438814> | Yetkili:**", message.author.username)
      .addField("**<:vorixright:781174618488438814> | Sonuç:**", `Başarılı`)
      .addField("**<:vorixright:781174618488438814> | Kaç Adet:**", +messagecount)
    return message.channel
      .sendEmbed(sohbetsilindi)
      .then(msg => msg.delete(5000));
    console
      .log("**Sohbet**" + message.member + "**Tarafından Silindi!**")
      .then(msg => msg.delete(5000));
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sil", "temizle"],
  permLevel: 2
};

exports.help = {
  name: "Sil"
};
