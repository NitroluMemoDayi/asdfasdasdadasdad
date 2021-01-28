const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../config.json');

var prefix = ayarlar.prefix;

module.exports = client => {
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar Yüklendi!`);
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} İsmi İle Giriş Yapıldı!`);
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an  ${client.channels.cache.size} Adet Kanala, ${client.guilds.cache.size} Adet Sunucuya Ve ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcıya Hizmet Veriliyor!`)
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı! Ve Giriş Yaptı`);
    client.user.setActivity(`${prefix}yardım + ${client.guilds.cache.size} Sunucu + ${client.users.cache.size} Kullanıcı`);
    client.user.setStatus("online");
    var musics = [
      "TEST BOT"
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(musics.length-0+1)+0);

        client.user.setActivity(musics[random], "" ); 
        }, 2 * 7500);
};