import { CommandInteraction } from "discord.js";
import { Command } from "../@types/Command";

export const HelloCommand : Command = {
    name: "hello",
    description: "Hello command",
    async run(interaction: CommandInteraction) {
        await interaction.reply({ 
            content: `Olá programador ${interaction.user}`
         });
    }
};