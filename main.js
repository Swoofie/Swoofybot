const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });



const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler' , 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})


//Keep login at end of document
client.login(config.token)

