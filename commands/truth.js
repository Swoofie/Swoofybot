module.exports = {
    name: 'truth',
    description: "The bot speaks only the truth",

   
    execute(message, args) {
        const userID = "373422145386053633";

     if(message.author.id === userID) {
        message.channel.send('You are wholesome')

    } else {
        message.channel.send('You are lewd').catch(console.error);
    }
}
}
