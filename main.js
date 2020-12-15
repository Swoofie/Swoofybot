const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Swoofy Bot is Online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)return;


    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'truth'){
        client.commands.get('truth').execute(message, args);
    } else if(command === 'server'){
        client.commands.get('server').execute(message, args);
    } else if(command === 'commands'){
        client.commands.get('commands').execute(message, args, Discord);
    } else if(command ==='clear'){
        client.commands.get('clear').execute(message, args);
    } else if(command ==='kick'){
        client.commands.get('kick').execute(message, args);
    } else if(command ==='ban'){
        client.commands.get('ban').execute(message, args);
    }
});








//Keep login at end of document
client.login(config.token)

