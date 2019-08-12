//Run unlocker if you want to use this as a selfbot

const Discord = require("discord.js");
const bot = new Discord.Client();
bot.login("NjEwMzYwNjgzNjI3OTM3Nzky.XVEI2g.LlZEEFsmgat593S272vJ3PxDD_8");

bot.on("ready", function() {
console.log("RUNNING.");
bot.user.setPresence({
        game: {
            name: 'always with you',
            type: "STREAMING",
            url: "https://www.twitch.tv/monstercat"
        }
    });
});

bot.on("message", function(message) {
	if(message.content.toLowerCase() == "autotext") {
		console.log("starting")
		bot.guilds.get(message.guild.id).members.forEach(member1 => {
			console.log(`Attempting to DM through selfbot API`)
			console.log(`DM'ed ${member1.user.tag}`)
			member1.send('')
		
		});
	}
	});