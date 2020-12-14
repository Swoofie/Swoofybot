const Discord = require('discord.js');
const config = require('/config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Swoofy Bot is Online!');
});











//Keep login at end of document
client.login(config.token)

