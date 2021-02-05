module.exports = {

    name:'kick',
    description:'This command kicks a member!',
    execute(client, message, args, Discord){
        if(message.member.hasPermission("KICK_MEMBERS")){
        const target = message.mentions.users.first();
        if(target){
            //log channel
            let logs = client.channels.cache.get('788194885466587176')
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            logs.send(`<@${memberTarget.user.id}> User kicked`);
            
         
        }else{
            message.channel.send(`You coudn't kick that member!`);
        }
    } else 
    message.channel.send('You Do not have permission for this command')
}
}