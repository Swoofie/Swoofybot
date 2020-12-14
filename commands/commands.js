module.exports = {
    name: 'commands',
    description: 'lists commands',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FBB9C9')
        .setTitle('Commands')
        .setURL('https://github.com/Swoofie/Swoofybot')
        .setDescription('Swoofy Bot Command list')
        .addFields(
            {name: 'Commands', value: 'Here are all the current commands for Swoofy Bot! Unreleased'},
            {name: '!truth', value: 'States the cold hard truth', inline: true},
            {name: '!server', value: 'Lists server infomation', inline: true},
        )
        message.channel.send(newEmbed)
    }
}