const { Client, Message } = require("discord.js");

module.exports = {
  name: "ping",
  description: "pong!",
  category: "random stuff",
  /**
   * @param {Client} client 
   * @param {Message} message 
   * @param {Array<String>} args 
   */
  async execute(client, message, args){
    await message.reply(`pong :) | ${client.ws.ping}ms `) //fuck you for not actually including the ping on a ping command.
  }
};
