module.exports = (Discord, client, message, args, config) => {
    client.on('guildMemberAdd', guildMember =>{
        let welcomeRole =guildMember.guild.roles.cache.find(role => role.name === 'Members');
    
        guildMember.roles.add(welcomeRole);
        guildMember.guild.channels.cache.get('807248377607356457').permissionsLocked(`<@${guildMember.user.id}> welcome to the server!`)
    });
}