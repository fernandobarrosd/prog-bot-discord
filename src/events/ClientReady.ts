import { Client } from "discord.js";
import { Commands } from "../commands/Commands";




export const ClientReady = (client: Client) => {
    console.log(`${client.user?.username} is started`);
    client.application?.commands
    .set(Commands);
}