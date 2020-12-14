module.exports = {

    name:'clear',
    description: "Clear Messages",
    async execute(message, args) {
        if(message.member.hasPermission("ADMINISTRATOR")){
        if(!args[0]) return message.reply("Please enter the amount of messages that you want to clear");
        if(isNaN(args,[0])) return message.reply("Please enter a real number dummy");

        if(args[0] > 100) return message.reply("Woah thats alot please lower the count");
        if(args[0] < 1) return message.reply("You are trying to delete negative messages? what?");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            message.channel.send('Deleted')
            .then(msg => {
                msg.delete({ timeout: 5000})
            })
            .catch(console.error);
           
        

        
               

        })

    } else 
    message.channel.send('You Do not have permission for this command')
}
}