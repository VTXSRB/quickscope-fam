const Discord = require("discord.js");
const bot = new Discord.Client();


bot.on("ready", ready => {
console.log("ready");
});

bot.on("message", async message => {
if(message.content === "ping") {
await message.channel.send("pong!");
}
});



bot.login(process.env.BOT_TOKEN);
