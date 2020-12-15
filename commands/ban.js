module.exports = {

    name:'ban',
    description:'This command bans a member!',
    execute(message, args, Discord, client){
        if(message.member.hasPermission("BAN_MEMBERS")){
        const target = message.mentions.users.first();
        if(target){
            let logs = client.channels.cache.get('788194885466587176')
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            logs.send(`<@${memberTarget.user.id}> User banned`);
        }else{
            message.channel.send(`You coudn't ban that member!`);
        }
    } else 
    message.channel.send('You Do not have permission for this command')
}
}