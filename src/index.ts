import { config } from "dotenv";
import { Client, Events, GatewayIntentBits } from "discord.js";
import { ClientReady } from "./events/ClientReady";
import { InteractionCreate } from "./events/InteractionCreate";


config();


const { DISCORD_TOKEN: TOKEN } = process.env;


const progBot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages
    ]
});


progBot.on(Events.ClientReady, ClientReady);
progBot.on(Events.InteractionCreate, InteractionCreate);

progBot.login(TOKEN);