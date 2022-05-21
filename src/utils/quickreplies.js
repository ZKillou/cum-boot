const { Message } = require("discord.js");

/**
 * Quicc replies generator
 * @param {Message} message 
 */
module.exports = function (message) {
  const content = message.content.toLowerCase()

  if(content.endsWith("quoi") || content.endsWith("quoi ?") || content.endsWith("quoi?") ||
  content.endsWith("what") || content.endsWith("what ?") || content.endsWith("what?")) {
    let links = [
      "https://cdn.discordapp.com/attachments/827593601541865562/976860929855717386/caption.jpg",
      "https://cdn.discordapp.com/attachments/790552353119535104/977687447297200168/caption.png",
      "https://cdn.discordapp.com/attachments/790552353119535104/977689518742306837/caption.webp",
      "https://cdn.discordapp.com/attachments/790552353119535104/977689987724218368/caption.png"
    ]
    return message.reply(links[Math.floor(Math.random() * links.length)])
  } else if (content.includes("amogus")) {
    return message.reply("sus bro")
  } else if(content.endsWith("sussy")) {
    return message.reply("baka")
  }
}