const Discord = require("discord.js");
const randomAnimal = require("random-animal.js")

const { Command } = require('../../commands.js')
module.exports = class PlatypusCommand extends Command {
  constructor(){
    super({
      name: 'platypus',
      aliases: 'perry',
      priority: 3,
      permLvl: 0
    })
  }
  execute(msg){
      if(msg.deletable) msg.delete();
    let platypus = ["https://images2.minutemediacdn.com/image/upload/c_crop,h_1376,w_2045,x_0,y_52/v1554744537/shape/mentalfloss/63062-istock-658344164.jpg?itok=sCyR37oD",
                   "https://imgsrv2.voi.id/jclxXAdFjOXhERCwiQ0xBlRwaPG0Y7NBcZt6lEp3TTY/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yMTI0Mi8yMDIwMTEyODA3NDEtbWFpbi5jcm9wcGVkXzE2MDY1MjQxMjIuanBn.jpg",
                   "https://i.natgeofe.com/n/89b24060-bbf6-4f8f-b74a-4757dbdfae5c/01-platypus-decline-20180430_3dg1547.jpg?w=1200",
                   "https://i.pinimg.com/originals/63/74/60/637460bad90d1bf584e7bdee5eaf2143.jpg",
                   "https://cdn.mos.cms.futurecdn.net/LTgdH3aE3sitD5Hwvf7Nym-1200-80.jpg",
                   "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fspencerbogart%2Ffiles%2F2017%2F12%2FDuck-Billed-Platypus.jpg",
                   "https://ak-d.tripcdn.com/images/10071f000001h6wyxD7CA_C_750_500.jpg?proc=source%2Ftrip",
                   "https://www.aljazeera.com/wp-content/uploads/2020/01/d8e8a3709c8948a9bcbaf716be16e158_18.jpeg?resize=770%2C513",
                   "https://cdn.britannica.com/48/94548-131-0CF9C331/Platypus.jpg",
                   "https://upload.wikimedia.org/wikipedia/commons/f/f2/Platypus.jpg",
                   "https://i.guim.co.uk/img/media/081092d4167d509f75a296855454059a10e756ad/0_313_4608_2765/master/4608.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=69f244120993caad8023616cdffb2899",
                   "https://static.wikia.nocookie.net/phineasandferb/images/6/66/Profile_-_Perry_the_Platypus.PNG/revision/latest?cb=20200401182751",
                   "https://i.guim.co.uk/img/media/bce057b47ef61fb97cb7c4f9c132824bd7e8441b/0_154_4608_2765/master/4608.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=6519561e4c729c67ef918b2f6a93e1dd",
                   "https://live-production.wcms.abc-cdn.net.au/50adc2d0acc56b15363273552af9644d?impolicy=wcms_crop_resize&cropH=576&cropW=1023&xPos=0&yPos=0&width=862&height=485",
                   "https://i.cbc.ca/1.5942538.1615313234!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/1305009125.jpg"];
    function pickRandom(option) {
      let result = option[Math.floor(Math.random() * option.length)];
      return result
    };
    const embed = new Discord.MessageEmbed()
    .setTitle("**Toma un ornitorrinco**")
    .setColor("RANDOM")
    .setImage(pickRandom(platypus))
    .setFooter("Comando secreto: 7");
    
    msg.channel.send(embed)
  }
}