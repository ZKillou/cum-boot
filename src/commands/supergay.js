const { Client, Message } = require("discord.js");

module.exports = {
  name: "supergay",
  description: "super gay moment !!1!",
  category: "random stuff",
  /**
   * @param {Client} client 
   * @param {Message} message 
   * @param {Array<String>} args 
   */
  async execute(client, message, args){
    await message.reply(`https://test.is-super.gay/api/img-gen?name=${encodeURIComponent(args.join(" "))}`);
  }
};
