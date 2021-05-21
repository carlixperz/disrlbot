const Discord = require("discord.js");
const marsnpm = require("marsnpm");

const { Command } = require('../../commands.js')
module.exports = class DabCommand extends Command {
  constructor(){
    super({
      name: 'dab',
      aliases: '',
      priority: 2,
      permLvl: 0
    })
  }
  async execute(msg){
         if(msg.deletable) msg.delete();
    let gif = await marsnpm.dab();
    let emisor = msg.author;
  const embed = new Discord.MessageEmbed()
      .setImage(gif)
      .setColor("#ff81fa")
      .setDescription(`**${emisor}** ha hecho un dab en pleno 2021.`)
      .setFooter("Comando secreto: Test-3");
    msg.channel.send(embed)
  }
}