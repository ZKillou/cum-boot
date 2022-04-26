require("dotenv").config();
const { Client, Collection } = require("discord.js");
const { loadCommands, loadEvents } = require("./utils/loaders");
const client = new Client({ intents: 131071 });

client.commands = new Collection();

loadCommands(client);
loadEvents(client);

client.login(process.env.TOKEN);