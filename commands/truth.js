module.exports = {
    name: 'truth',
    description: "The bot speaks only the truth",

   
    execute(message, args) {
        const userID2 ="274918906718584833";
        const userID = "373422145386053633";

     if(message.author.id === userID) {
        message.channel.send('You are wholesome')

    } else if(message.author.id === userID2) {
        message.channel.send('You are also wholesome')
    } else 
        message.channel.send('You are lewd').catch(console.error);
    }
}

