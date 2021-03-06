const ms= require('ms');
module.exports = {

    name:'mute',
    description:'This command mutes a member',
    execute(client, message, args, Discord){
        if(message.member.hasPermission("BAN_MEMBERS")){
        const target = message.mentions.users.first();
        if(target){
            let logs = client.channels.cache.get('788194885466587176')
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Friends');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

            let memberTarget= message.guild.members.cache.get(target.id);

            if(!args[1]){
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`)
                logs.send(`<@${memberTarget.user.id}> has been muted`);
                return
                
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
            logs.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

            setTimeout(function() {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));



        } else{
            message.channel.send('please enter a valid user');
        }

    } else 
    message.channel.send('You Do not have permission for this command')
}
}

