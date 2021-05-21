const Discord = require("discord.js");

const { Command } = require('../../commands.js')
module.exports = class LeCharlesCommand extends Command {
  constructor(){
    super({
      name: 'carlixdev',
      aliases: 'tehdeveloper',
      priority: 3,
      permLvl: 1
    })
  }
  async execute(msg){
    if(msg.deletable) msg.delete();
    const embed = new Discord.MessageEmbed()
    .setTitle("Datos del desarrollador")
    .setColor("#0088ff")
    .setImage("https://cdn.discordapp.com/avatars/607571230303977493/3d0a41add6c9d396ec7b245adec55372.png?size=512")
     .addFields(
                {
                    name: "Nombre: ",
                    value: `CarlixDev`,
                    inline: true
                },
                {
                    name: "Tag: ",
                    value: `#9025`,
                },
                {
                    name: 'ID: ',
                    value: `607571230303977493`,
                    inline: true
                },
                {
                    name: 'Avatar link: ',
                    value: `[Pincha Aquí](https://cdn.discordapp.com/avatars/607571230303977493/3d0a41add6c9d396ec7b245adec55372.png?size=512)`
                },
            );
  msg.channel.send(embed)
  }
}