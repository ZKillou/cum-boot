const { Client } = require("discord.js");

module.exports = {
  once: true,
  /**
   * @param {Client} client 
   */
  execute(client){
    console.log(`The bot is online !!!1! On ${client.guilds.cache.size} guilds rn`);
  }
};