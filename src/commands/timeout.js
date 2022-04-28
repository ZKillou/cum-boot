const { Client, Message } = require("discord.js");
const ms = require("ms")

module.exports = {
  name: "timeout",
  description: "timeout a user",
  category: "mod",
  permissionsUser: ["MODERATE_MEMBERS"],
  permissionsBot: ["MODERATE_MEMBERS"],
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

    let member;
    try {
      // Permissions test
      member = await message.guild.members.fetch(user.id);

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

    let time = args[1];
    if(!time) {
      await message.reply("no time provided (you should)");
      return;
    }
    if(time == "null") {
      time = null;
    } else {
      time = ms(time);
    };

    let reason = "No reason provided";
    if(args[2]) reason = args.slice(2).join(" ");

    await member.timeout(time, `${reason} [by ${message.author.tag}]`);
    await message.reply(`u timeouted ${user.tag} for ${time}ms lmao`);
  }
};