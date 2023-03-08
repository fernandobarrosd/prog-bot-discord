import { Interaction } from "discord.js";
import { config } from "dotenv";
import { executeCommand } from "../functions/executeCommand";
config();

const { DISCORD_CHANNEL_ID } = process.env;

export const InteractionCreate = (interaction: Interaction) => {

    if (!interaction.isChatInputCommand()) return;

    executeCommand(interaction);
}