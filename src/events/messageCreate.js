const { Client, Message } = require("discord.js");

module.exports = {
  /**
   * @param {Client} client 
   * @param {Message} message 
   */
  async execute(client, message) {
    // amongus secret reference
    if (message.author.bot) return;
    if (message.content.toLowerCase().endsWith("quoi")) message.reply("feur")
    if (message.channel.type === "DM") return;
    if (!message.content.toLowerCase().startsWith(process.env.PREFIX)) return;

    const args = message.content.slice(process.env.PREFIX.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);

    if (!command) return;

    if(command.isDevOnly && message.author.id != process.env.OWNER){
      await message.reply("u r not the owner of the bot (srry)");
      return;
    }

    if(command.permissionsUser && command.permissionsUser.length && !message.member.permissions.has(command.permissionsUser)) {
      await message.reply("you don't have enough permissions");
      return;
    };

    if(command.permissionsBot && command.permissionsBot.length && !message.guild.me.permissions.has(command.permissionsBot)) {
      await message.reply("i don't have enough permissions (giv admin pls)");
      return;
    };

    try {
      await command.execute(client, message, args);
    } catch (error) {
      await message.channel.send(`An error occured ...\n\`\`\`xl\n${error}\`\`\``);
    };
  }
};
