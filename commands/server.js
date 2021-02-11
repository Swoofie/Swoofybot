const { UserFlags } = require("discord.js");

module.exports = {
    name: 'server',
    aliases: ['info'],
    description: "show server stats",
    execute(client, message, args, Discord){
        message.channel.send(`Server name: ${message.guild.name}  Total members: ${message.guild.memberCount}. Enjoy your stay lewdies`);
    } 
}

