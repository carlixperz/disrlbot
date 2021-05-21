const Discord = require("discord.js");
const marsnpm = require("marsnpm");

const { Command } = require('../../commands.js')
module.exports = class FBICommand extends Command {
  constructor(){
    super({
      name: 'fbi',
      aliases: 'Federal-Bureau-of-Investigation',
      priority: 2,
      permLvl: 1
    })
  }
  async execute(msg){
     if(msg.deletable) msg.delete();
    let gif = await marsnpm.fbi();
    let emisor = msg.author;
    let mention = msg.mentions.users.first();
    if (!mention)
      return msg.reply("¡No liberaré a las lolis!");
  const embed = new Discord.MessageEmbed()
      .setImage(gif)
      .setColor("#ff81fa")
      .setFooter("Comando secreto: Test-2")
      .setDescription(`**${emisor}** ha avisado al fbi... ¡Corre, **${mention}**!`);
    msg.channel.send(embed)
  }
}