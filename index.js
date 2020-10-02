const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Bot ready');
});


client.on('message', msg => {
	if (msg.content === '*sl' && msg.channel['name'] === 'ness-mains') {
		const author = msg.author['username'];
		msg.channel.send(author + ", SL release date hasn't been announced yet. We don't know when it's coming out. Stay tuned!");
	}
	if (msg.content === '*prepatch' && msg.channel['name'] === 'ness-mains') {
		const author = msg.author['username'];
		const date = new Date();
		if (String((date.getMonth() + 1)) + date.getDate() === '1013') {
			msg.channel.send(author + ', Pre-patch AKA SL waiting room is out. Get on if you want, I guess.');
		}
		else {
			const time = date.getTime();
			const prepatch_time = Math.round((1602561600000 - time) / (60 * 60 * 24 * 1000)) + 1;
			msg.channel.send(author + ", WoW SL Pre-Patch is not out yet. It's coming on 10/13/2020. That's " + String(prepatch_time) + ' days away. For the Horde!');
		}
	}
});

client.login(process.env.BOT_TOKEN);

