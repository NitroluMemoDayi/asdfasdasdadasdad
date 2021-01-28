const Discord = require('discord.js');
const superagent = require('superagent')

exports.run = async(client,message,args) => {
let {body} = await superagent
.get('https://no-api-key.com/api/v1/animals/dog')
let embed = new Discord.MessageEmbed()
.setImage(body.image)
.setFooter(`${message.author.username} tarafından istendi.`,message.author.avatarURL({dynamic:true}))
message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['köpke'],
  permLevel: 0
}

exports.help = {
  name: "köpke",
  description:"rastgele köpke atar",
  usage:"köpke"
}