module.exports = {
    name: 'commands',
    description: 'lists commands',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FBB9C9')
        .setTitle('Commands')
        .setURL('https://github.com/Swoofie/Swoofybot')
        .setDescription('Swoofy Bot Command list. Unreleased.')
        
        .addFields(

        
            {name: 'General Commands', value: 'Here are all the current commands for Swoofy Bot! Unreleased'},
            {name: '!server', value: 'Lists server infomation', inline: true},
            {name: '!commands', value: 'Lists all avalible server commands', inline: true},
            //blank space vv
            {name: '\u200b', value:'\u200b', inline: false},
            {name: 'Fun Command', value:'Few little fun commands from the bot'},
            {name: '!truth', value: 'Tells the cold hard truth', inline: true},
            {name: '\u200b', value:'\u200b', inline: false},
            {name: 'Moderation Commands', value:'\u200b'},
            {name: '!clear', value: 'Clears messages 1-100', inline: true},
            {name: '!kick', value: 'Kicks a member', inline: true},
            {name: '!ban', value: 'Bans a member', inline: true},
        )
        
        
        message.channel.send(newEmbed)
    }
}