module.exports = {
    name: 'unmute',
    description: 'unmutes a user',
    execute(client, message, args, Discord){
    if(message.member.hasPermission("BAN_MEMBERS")){
    const target = message.mentions.users.first();
    if (target) {
        let logs = client.channels.cache.get('788194885466587176')
        let mainRole = message.guild.roles.cache.find(role => role.name === 'Friends');
        let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

        let memberTarget = message.guild.members.cache.get(target.id);



        memberTarget.roles.add(mainRole.id);
        memberTarget.roles.remove(muteRole.id);
        message.channel.send(`<@${memberTarget.user.id}> has been unmuted`)
        logs.send(`<@${memberTarget.user.id}> has been unmuted`);



    } else {
        message.channel.send('please enter a valid user');
    }

} else
message.channel.send('You Do not have permission for this command')
}
}


