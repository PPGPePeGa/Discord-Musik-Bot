module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    async execute(client, message, cmd, args, Discord){
       
        const msg = await message.channel.send('Pinging...');
       const latency = msg.createdTimestamp - message.createdTimestamp;
       
       msg.edit(`Bot Latency: ${latency}ms`);
    }
}