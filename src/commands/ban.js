const { Client, Message } = require("discord.js");

module.exports = {
  name: "ban",
  description: "ban a user",
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
      user = message.mentions.users.first() || await client.users.fetch(args[0]);
    } catch(error) {
      await message.reply("that user is invalid :skull:");
      return;
    };

    try {
      // Permissions test
      let member = await message.guild.members.fetch(user.id);

      if(!member.manageable) {
        await message.reply("i can't to that on this user bruh");
        return;
      };

      if(message.guild.ownerId != message.member.id && (member.roles.highest.position >= message.member.roles.highest.position || member.permissions.has("ADMINISTRATOR") || message.guild.ownerId == member.id)) {
        await message.reply("you can't do that on this user lmao");
        return;
      };
    } catch(_) {};

    let reason = "No reason provided";
    if(args[1]) reason = args.slice(1).join(" ");

    await message.guild.members.ban(user.id, { reason: `${reason} [by ${message.author.tag}]` });
    await message.reply(`u banned ${user.tag} lmao`);
  }
};