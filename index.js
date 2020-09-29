const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Bot ready');
});


client.on('message', msg => {
	if (msg.content === '*sl') {
		const author = msg.author['username'];
		const date = new Date();
		if (String((date.getMonth() + 1)) + date.getDate() === '1028') {
			msg.channel.send(author + ', WoW Shadowlands out! Get on!');
		}
		else {
			msg.channel.send(author + ", WoW Shadowlands is not out yet. It's coming on 10/29/2020.")
		}

		// console.log( + );
	}
});

// in future when putting on Git/etc replace token with something else for security
client.login('');

