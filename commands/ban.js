module.exports = {

    name:'ban',
    description:'This command bans a member!',
    execute(message, args){
        if(message.member.hasPermission("ADMINISTRATOR")){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been banned");
        }else{
            message.channel.send(`You coudn't ban that member!`);
        }
    } else 
    message.channel.send('You Do not have permission for this command')
}
}