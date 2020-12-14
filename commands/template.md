module.exports = {
    name: 'name',
    description: "description",
    execute(message, args){
        code
    }
}




Add role restrictions

if(message.member.roles.cache.has('roleid')){
    code 
} else {
     message.channel.send('you dont have permission to send this command');
}
Send a message           message.channel.send('Swoofy is wholesome') 


Add a role
 message.member.roles.add('roleid')


Timer
           message.channel.send('Deleted')
            .then(msg => {
                msg.delete({ timeout: 5000})
            })