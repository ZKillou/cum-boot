const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "can be helpful sometimes (no)",
  category: "random stuff",
  /**
   * @param {Client} client 
   * @param {Message} message 
   * @param {Array<String>} args 
   */
  async execute(client, message, args){
    const embed = new MessageEmbed()
      .setTitle("a very helpful help command")
      .setDescription(client.commands.sort((a, b) => a.category.localeCompare(b.category)).map(c => `[${c.category}] ${process.env.PREFIX}${c.name} : ${c.description}`).join("\n"));
    
    await message.reply({ embeds: [embed] });
  }
};