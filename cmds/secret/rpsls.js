

const Discord = require("discord.js");

const { Command } = require('../../commands.js')
module.exports = class RPSCommand extends Command {
  constructor(){
    super({
      name: 'rpsls',
      aliases: 'pptls',
      priority: 1,
      permLvl: 0
    })
  }
  execute(msg){
    if(msg.deletable) msg.delete();
    
    const index = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setDescription(`¡Usa las reacciones para jugar, ${msg.author.username}!`)
    .addField("🏔", "Par elegir **piedra**")
    .addField("📃", "Par elegir **papel**")
    .addField("✂️", "Par elegir **tijeras**")
    .addField("🦎", "Par elegir **lagarto**")
    .addField("🖖", "Par elegir **Spock**")
    .setFooter("Comando secreto: 6")
    
    
    const rock1 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("GREEN")
    .setDescription(`🏔 ¡Has ganado! ✂️`)
    .addField("Has elegido:", "Piedra")
    .addField("He elegido:", "Tijeras")
    .setFooter("Piedra aplasta tijeras")

        const rock2 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("WHITE")
    .setDescription(`🏔 ¡Empate! 🏔`)
    .addField("Has elegido:", "Piedra")
    .addField("He elegido:", "Piedra")
    .setFooter("Piedra y piedra")
        
            const rock3 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("RED")
    .setDescription(`🏔 ¡Has perdido! 📃`)
    .addField("Has elegido:", "Piedra")
    .addField("He elegido:", "Papel")
    .setFooter("Papel cubre piedra")
            
    const rock4 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("GREEN")
    .setDescription(`🏔 ¡Has ganado! 🦎`)
    .addField("Has elegido:", "Piedra")
    .addField("He elegido:", "Lagarto")
    .setFooter("Piedra aplasta lagarto")
    
    const rock5 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("RED")
    .setDescription(`🏔 ¡Has perdido! 🖖`)
    .addField("Has elegido:", "Piedra")
    .addField("He elegido:", "Spock")
    .setFooter("Spock vaporiza piedra")

            const paper1 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("GREEN")       
    .setDescription(`📃 ¡Has ganado! 🏔`)
    .addField("Has elegido:", "Papel")
    .addField("He elegido:", "Piedra")
    .setFooter("Papel cubre piedra")

        const paper2 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("WHITE")
    .setDescription(`📃 ¡Empate! 📃`)
    .addField("Has elegido:", "Papel")
    .addField("He elegido:", "Papel")
    .setFooter("Papel y papel")
        
            const paper3 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("RED")
    .setDescription(`📃 ¡Has perdido! ✂️`)
    .addField("Has elegido:", "Papel")
    .addField("He elegido:", "Tijera")
    .setFooter("Tijeras cortan papel")
            
    const paper4 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("RED")
    .setDescription(`📃 ¡Has perdido! 🦎`)
    .addField("Has elegido:", "Papel")
    .addField("He elegido:", "Lagarto")
    .setFooter("Lagarto devora papel")
    
    const paper5 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("GREEN")
    .setDescription(`📃 ¡Has ganado! 🖖`)
    .addField("Has elegido:", "Papel")
    .addField("He elegido:", "Spock")
    .setFooter("Papel desautoriza Spock")
            
            const scissors1 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("GREEN")
    .setDescription(`✂️ ¡Has ganado! 📃`)
    .addField("Has elegido:", "Tijeras")
    .addField("He elegido:", "Papel")
    .setFooter("Tijeras cortan papel")

        const scissors2 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("WHITE")
    .setDescription(`✂️ ¡Empate! ✂️`)
    .addField("Has elegido:", "Tijeras")
    .addField("He elegido:", "Tijeras")
    .setFooter("Tijeras y tijeras")
        
            const scissors3 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("RED")
    .setDescription(`✂️ ¡Has perdido! 🏔`)
    .addField("Has elegido:", "Tijeras")
    .addField("He elegido:", "Piedra")
    .setFooter("Piedra aplasta tijeras")
     
    const scissors4 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("GREEN")
    .setDescription(`✂️ ¡Has ganado! 🦎`)
    .addField("Has elegido:", "Tijeras")
    .addField("He elegido:", "Lagarto")
    .setFooter("Tijeras decapitan lagarto")
    
    const scissors5 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("RED")
    .setDescription(`✂️ ¡Has perdido! 🖖`)
    .addField("Has elegido:", "Tijeras")
    .addField("He elegido:", "Spock")
    .setFooter("Spock rompe tijeras")
    
                const lizard1 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("GREEN")
    .setDescription(`🦎 ¡Has ganado! 📃`)
    .addField("Has elegido:", "Lagarto")
    .addField("He elegido:", "Papel")
    .setFooter("Lagarto devora papel")

        const lizard2 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("WHITE")
    .setDescription(`🦎 ¡Empate! 🦎`)
    .addField("Has elegido:", "Lagarto")
    .addField("He elegido:", "Lagarto")
    .setFooter("Lagarto y lagarto")
        
            const lizard3 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("RED")
    .setDescription(`🦎 ¡Has perdido! 🏔`)
    .addField("Has elegido:", "Lagarto")
    .addField("He elegido:", "Piedra")
    .setFooter("Piedra aplasta lagarto")
     
    const lizard4 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("GREEN")
    .setDescription(`🦎 ¡Has ganado! 🖖`)
    .addField("Has elegido:", "Lagarto")
    .addField("He elegido:", "Spock")
    .setFooter("Lagarto envenena lagarto")
    
    const lizard5 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("RED")
    .setDescription(`🦎 ¡Has perdido! ✂️`)
    .addField("Has elegido:", "Lagarto")
    .addField("He elegido:", "Tijeras")
    .setFooter("Tijeras decapitan lagarto")
       
    const spock1 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("GREEN")
    .setDescription(`🖖 ¡Has ganado! ✂️`)
    .addField("Has elegido:", "Spock")
    .addField("He elegido:", "Tijeras")
    .setFooter("Spock rompe tijeras")

        const spock2 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("WHITE")
    .setDescription(`🖖 ¡Empate! 🖖`)
    .addField("Has elegido:", "Spock")
    .addField("He elegido:", "Spock")
    .setFooter("Spock y Spock (how...)")
        
            const spock3 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("RED")
    .setDescription(`🖖 ¡Has perdido! 📃`)
    .addField("Has elegido:", "Spock")
    .addField("He elegido:", "Papel")
    .setFooter("Papel desautoriza spock")
            
    const spock4 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("GREEN")
    .setDescription(`🖖 ¡Has ganado! 🏔`)
    .addField("Has elegido:", "Spock")
    .addField("He elegido:", "Piedra")
    .setFooter("Spock vaporiza piedra")
    
    const spock5 = new Discord.MessageEmbed()
    .setTitle(`**¿Piedra, papel, tijeras, lagarto o Spock?**`)
    .setColor("RED")
    .setDescription(`🖖 ¡Has perdido! 🦎`)
    .addField("Has elegido:", "Spock")
    .addField("He elegido:", "Lagarto")
    .setFooter("Lagarto envenena Spock")
    
    msg.channel.send(index).then(m => {
        m.react('🏔')
        m.react('📃')
        m.react('✂️')
        m.react('🦎')
        m.react('🖖')
        m.awaitReactions((reaction, user) => {
            const userReactions = m.reactions.cache.filter(reaction => reaction.users.cache.has(user.id));
            if(msg.author.id !== user.id) return; 
    
            if(reaction.emoji.name === '🏔') { 
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id);
                }
            } catch(error) { console.error(error) }
              let options = [rock1, rock2, rock3, rock4, rock5];
                    let ans = options[Math.floor(Math.random() * options.length)];
                m.edit(ans);
            }
          if(reaction.emoji.name === '📃') {
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id);
                }
            } catch(error) { console.error(error) }
                let options2 = [paper1, paper2, paper3, paper4, paper5];
                    let ans2 = options2[Math.floor(Math.random() * options2.length)];
                m.edit(ans2);
            }
            if(reaction.emoji.name === '✂️') { 
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id); 
                }
            } catch(error) { console.error(error) }
                let options3 = [scissors1, scissors2, scissors3, scissors4, scissors5];
                    let ans3 = options3[Math.floor(Math.random() * options3.length)];
                m.edit(ans3);
            }
          if(reaction.emoji.name === '🦎') { 
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id); 
                }
            } catch(error) { console.error(error) }
                let options4 = [lizard1, lizard2, lizard3, lizard4, lizard5];
                    let ans4 = options4[Math.floor(Math.random() * options4.length)];
                m.edit(ans4);
            }
          if(reaction.emoji.name === '🖖') { 
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id); 
                }
            } catch(error) { console.error(error) }
                let options5 = [spock1, spock2, spock3, spock4, spock5];
                    let ans5 = options5[Math.floor(Math.random() * options5.length)];
                m.edit(ans5);
            }
        })
    })
    }
  }

//parezco inglés bruh