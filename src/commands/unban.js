const { Client, Message } = require("discord.js");

module.exports = {
  name: "unban",
  description: "unban a user",
  category: "mod",
  permissionsUser: ["BAN_MEMBERS"],
  permissionsBot: ["BAN_MEMBERS"],
  /**
   * @param {Client} client 
   * @param {Message} message 
   * @param {Array<String>} args 
   */
  async execute(client, message, args){
    let user;
    try {
      user = await client.users.fetch(args[0]);
    } catch(error) {
      await message.reply("that user is invalid :skull:");
      return;
    };

    let reason = "No reason provided";
    if(args[1]) reason = args.slice(1).join(" ");

    await message.guild.members.unban(user.id, `${reason} [by ${message.author.tag}]`);
    await message.reply(`u unbanned ${user.tag} lmao`);
  }
};