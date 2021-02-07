const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'ODAzOTMxODI4NTg2OTM4Mzk4.YBE93A.qclrRegUcuS2WR1uzb6RTxM4qPU';


const prefix = '/';

bot.on('ready', () => {
    console.log("im ready")
    bot.user.setActivity("/link", {type : "PLAYING"});
})



bot.on('message', Message => {
 
    if (Message.author.bot) return;

    let args = Message.content.substring(prefix.length).split(" ")

    if (Message.content.startsWith(prefix)) {
        if (args[0] === "creator"){
            Message.channel.send(" **bot created by** @MANAI ")

        }
    if (args[0] === "championshipsbanner"){
          Message.reply("Error")
          Message.channel.send("championships ID not received.")
    
    }

    } else {
        if (Message.content === "leaderbord"){
            Message.channel.send(" **Not Set!** ")
                }
    

    }  

})

bot.on('message', Message => {
    let args = Message.content.substring(prefix.length).split(" ")

    if (Message.content.startsWith(prefix)) {
        if (args[0] === "link"){
            Message.channel.send(" https://discord.gg/pNaQVQZH35 ")
           

    

        }

    }  

})    


bot.login(token)