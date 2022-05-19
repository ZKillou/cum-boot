const { Message } = require("discord.js");

/**
 * Quicc replies generator
 * @param {Message} message 
 */
module.exports = function (message) {
  const content = message.content.toLowerCase()

  if(content.endsWith("quoi") || content.endsWith("quoi ?") || content.endsWith("quoi?") ||
  content.endsWith("what") || content.endsWith("what ?") || content.endsWith("what?")) {
    return message.reply("https://cdn.discordapp.com/attachments/827593601541865562/976860929855717386/caption.jpg")
  } else if (content.includes("amogus")) {
    return message.reply("sus bro")
  } else if(content.endsWith("sussy")) {
    return message.reply("baka")
  }
}