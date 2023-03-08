import { CommandInteraction } from "discord.js";
import { Commands } from "../commands/Commands";

export const executeCommand = (interaction: CommandInteraction) => {
    const { commandName } = interaction; 
    const slashCommand = Commands.find(command => command.name === commandName);

    slashCommand?.run(interaction);
}