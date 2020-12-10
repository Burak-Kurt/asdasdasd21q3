const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async function(client, message,args)  {
  const sas=args[0]
  if(sas ==='aç') {
    await db.set(`saas_${message.guild.id}`,sas)
    return message.reply('Sa-As sistemi Açıldı')
  }
  if(sas === 'kapat') {
    await db.delete(`saas_${message.guild.id}`)
   return message.reply('Sa-As sistemi Kapatıldı')
  }
  if(sas != 'aç' || sas != 'kapat') {
    return message.reply('Örnek Kullanım: v!sa-as aç/kapat')
  }
} ;

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: [], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'sa-as', //adını belirledik (kullanmak için gereken komut)
  description: 'Sa-as sistemini açıp kapatırsınız.', //açıklaması
  usage: 'sa-as' //komutun kullanım şekli (mesela hava <bölge>)
};
