module.exports = async (Discord, client, member) => 
{
  const guild = member.guild
   // let welcomeRole = guild.roles.cache.find(role => role.name === 'Comfy Cats');
    member.roles.add('799573575971373096');
    guild.channels.cache.get('807248377607356457').send(`<@${member.user.id}> welcome to the server!`)
}