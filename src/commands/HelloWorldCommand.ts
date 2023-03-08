import { CommandInteraction } from "discord.js";
import { Command } from "../@types/Command";

export const HelloWorldCommand : Command = {
    name: "hello_world",
    description: "Hello world command",

    async run(interaction: CommandInteraction) {
        await interaction.reply({
            content: `${interaction.user}, hello world`
        })
    }
};