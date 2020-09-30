const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Bot ready');
});


client.on('message', msg => {
	if (msg.content === '*sl' && msg.channel['name'] === 'ness-mains') {
		const author = msg.author['username'];
		const date = new Date();
		if (String((date.getMonth() + 1)) + date.getDate() === '1026') {
			msg.channel.send(author + ', WoW Shadowlands is out! Get on!');
		}
		else {
			const time = date.getTime();
			const shadowlands_time = Math.round((1603670400000 - time) / (60 * 60 * 24 * 1000)) + 1;
			msg.channel.send(author + ", WoW Shadowlands is not out yet. It's coming on 10/26/2020. That's " + String(shadowlands_time) + ' days away. For the Horde!');
		}
	}
	if (msg.content === '*prepatch' && msg.channel['name'] === 'ness-mains') {
		const author = msg.author['username'];
		msg.channel.send(author + ', WoW Shadowlands Pre-Patch date has not been announced yet.');
	}
});

client.login(process.env.BOT_TOKEN);

