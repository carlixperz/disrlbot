const Discord = require("discord.js");
const randomAnimal = require("random-animal.js")

const { Command } = require('../../commands.js')
module.exports = class RedpandaCommand extends Command {
  constructor(){
    super({
      name: 'redpanda',
      aliases: 'pandabutitsred',
      priority: 3,
      permLvl: 1
    })
  }
  execute(msg){
    if(msg.deletable) msg.delete();
    randomAnimal.randomRedPanda().then((panda) => {
    const embed = new Discord.MessageEmbed()
      .setImage(panda)
      .setColor("RANDOM")
      .setDescription("**Toma un panda rojo**")
      .setFooter("Comando secreto: Test-1");
    msg.channel.send(embed);
    })
  }
}