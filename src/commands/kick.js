const { Client, Message } = require("discord.js");

module.exports = {
  name: "kick",
  description: "kick a user",
  category: "mod",
  permissionsUser: ["KICK_MEMBERS"],
  permissionsBot: ["KICK_MEMBERS"],
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
    } catch(_) {
      await message.reply("this user isnt in the guild");
      return;
    };

    let reason = "No reason provided";
    if(args[1]) reason = args.slice(1).join(" ");

    await message.guild.members.kick(user.id, { reason: `${reason} [by ${message.author.tag}]` });
    await message.reply(`u kickd ${user.tag} lmao`);
  }
};