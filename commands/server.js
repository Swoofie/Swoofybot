const { UserFlags } = require("discord.js");

module.exports = {
    name: 'server',
    description: "show server stats",
    execute(message, args){
        message.channel.send(`Server name: ${message.guild.name}  Total members: ${message.guild.memberCount}. Enjoy your stay lewdies`);
    } 
}

