const Discord = require("discord.js");
const config = require("../../config.js");
let prefix = config.prefix;


const { Command } = require('../../commands.js')
module.exports = class MusiichanCommand extends Command {
  constructor(){
    super({
      name: 'musiichan',
      aliases: ['musichán', 'MuSa'],
      priority: 6,
      permLvl: 0
    })
  }
  execute(msg){
        if(msg.deletable) msg.delete();
      let musianswer = ["Cala a boca", "Man á pisa", "Mira, filliño, vas calar a boca dunha vez", "MuSa Sueti", " MuSa te mira y te conquista", "Illo, MuSa, que Carlix te quiere", " Esto es una frase de relleno", "Joder, MuSa, me estoy sobrecalentando...", "Venga, Samuel, díselo ya, dile que le amas...", "Yo también duro 2 horas..."]
     let rans = musianswer[Math.floor(Math.random() * musianswer.length)];
      msg.channel.send(rans)
  }
}