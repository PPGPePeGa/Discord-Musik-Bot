module.exports = {
    name: 'youtube',
    description: "send a youtube link!",
    execute(client, message, cmd, args, Discord){
        message.channel.send('https://www.youtube.com/channel/UCgoYOlfupfoF-t3VIsDWUkw');
    }
}