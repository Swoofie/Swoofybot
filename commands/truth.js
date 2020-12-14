module.exports = {
    name: 'truth',
    description: "The bot speaks only the truth",

   
    execute(message, args) {
        const userID2 ="274918906718584833";
        const userID = "373422145386053633";
        const userID3 = "368192371353059341";

     if(message.author.id === userID) {
        message.channel.send('You are wholesome')

    } else if(message.author.id === userID2) {
        message.channel.send('You are also wholesome')
    } else if(message.author.id === userID3){
        message.channel.send('Yes you wholesome lil cow <3')
    } else
        message.channel.send('You are lewd').catch(console.error);
    }
}

