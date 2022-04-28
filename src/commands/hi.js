const { Client, Message } = require("discord.js");

module.exports = {
  name: "hi",
  description: "replies with hello",
  category: "random stuff",
  /**
   * @param {Client} client 
   * @param {Message} message 
   * @param {Array<String>} args 
   */
  async execute(client, message, args){
    await message.reply("Hello!");
  }
};
