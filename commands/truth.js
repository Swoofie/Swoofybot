module.exports = {
    name: 'truth',
    description: "The bot speaks only the truth",

   
    execute(client, message, args, Discord) {
        const userID2 ="274918906718584833";
        const userID = "373422145386053633";
        const userID3 = "368192371353059341";
        const userID4 = "119088036678991873";
        const userID5 = "253713264037330944";
        const userID6 = "275234310607339520";
        const userID7 = "272489452792709120";

     if(message.author.id === userID) {
        message.channel.send('You are wholesome')

    } else if(message.author.id === userID2) {
        message.channel.send('You are also wholesome')
    } else if(message.author.id === userID3){
        message.channel.send('Yes you wholesome lil cow <3')
    } else if(message.author.id === userID4){
        message.channel.send('We will go to the sky master! Please keep up your amazing map work as we grow together and I go on even more adventures!~')
    } else if(message.author.id === userID5){
        message.channel.send('What a cute little kitty~')
    } else if(message.author.id === userID6){
        message.channel.send('Such a adorable little neko maid~')
    } else if(message.author.id === userID7){
        message.channel.send('She will be a **good pet** for you~')
    
    } else
        message.channel.send('You are lewd').catch(console.error);
    }
}

