const Discord = require('discord.js.7z');
const client = new Discord.Client();
client.login('gCc3S2tZ4QaPB2oWPAJExG-NU6ktH_FjIVEPTEEzgaAmXyhQ00Y_FUhhTsLdFjuMdmiy');

var request = require('request');
var mcCommand = '/minecraft'; // Command for triggering
var mcIP = '175.36.30.203'; // Your MC server IP or hostname address
var mcPort = 25565; // Your MC server port (25565 is the default)

client.on('message', message => {
    if (message.content === mcCommand) {
        var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('Error getting Minecraft server status...');
            }
            body = JSON.parse(body);
            var status = '*Minecraft server is currently offline*';
            if(body.online) {
                status = '**Minecraft** server is **online**  -  ';
                if(body.players.now) {
                    status += '**' + body.players.now + '** people are playing!';
                } else {
                    status += '*Nobody is playing!*';
                }
            }
            message.reply(status);
        });
    }
});
