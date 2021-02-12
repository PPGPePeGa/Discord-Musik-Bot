module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(client, message, cmd, args, Discord){
        message.channel.send('pong!');
    }
}