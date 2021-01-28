const Discord = require("discord.js");
exports.run = async(client, message, args) => {
if(message.author.id !== "655461598839963690") return;
 let arg = args.slice(0).join(" ")
if(arg.includes("token")) return message.channel.send(`\`\`\`awsgdıavhodjahkdsiapljadkdjadbajslkhdilaskdmlsg\`\`\``)
  
   try {
        let codein = args.join(" ");
        let code = await eval(codein);
        if (typeof code !== 'string')
            code = await require('util').inspect(code, { depth: 0 });
        message.channel.send(`\`\`\`\n${code}\n\`\`\``)
    } catch(e) {
        message.channel.send(`HATA \`\`\`\n${e}\n\`\`\``);
    }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['eval'],
  permLevel: 0
};


exports.help = {
  name: 'eval',
  description: 'Kod denersiniz.',
  usage: 'eval <kod>'
};