const { MessageFlags } = require("discord.js");

module.exports = {
    name: 'clear',
    description: "Clear messages!",
    async execute(client, message, cmd, args, Discord) {
        if(!args[0]) return message.reply("Bitte gebe die menge an Nachrichten die du löschen möchtest an!");
        if(isNaN(args[0])) return message.reply("Bitte gebe eine richtige Nummer ein!");

        if(args[0] > 100) return message.reply("Du kannst nicht mehr als 100 Nachrichte löschen!");
        if(args[0] < 1) return message.reply("Du musst mindestens eine Nachricht löschen!"); 

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);

        });
    }
}