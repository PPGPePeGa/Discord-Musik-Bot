const ms = require('ms');

module.exports = {
    name: 'uptime',
    description: "this is a uptime command!",
    async execute(client, message, cmd, args, Discord){
        let days = 0
            let week = 0
            let uptime = '';
            let totalSeconds = (client.uptime / 1000)
            let hours = Math.floor(totalSeconds / 3600)
            totalSeconds %= 3600
            let minutes = Math.floor(totalSeconds / 60)
            let seconds = Math.floor(totalSeconds % 60)
            if (hours > 24) {
            days = days + 1
            hours = 0
                    }
            if (week - 0) {
            uptime += `${week} week, `
                    }
            if (minutes > 60) {
            minutes = 0;
                    }
            uptime += `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
            
            await message.channel.send(`my uptime is ${uptime}`)
    }
}