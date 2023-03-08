import { ApplicationCommandOptionType, CommandInteraction } from "discord.js";
import { Command } from "../@types/Command";

export const MentionUser : Command = {
    name: "mention",
    description: "Mention user command",
    options: [
        {
            name: "user",
            description: "mention user",
            type: ApplicationCommandOptionType.User,
            required: true
        }
    ],

    async run(interaction: CommandInteraction) {
        const mentionUser = interaction.options.getUser("user");

        await interaction.reply({
            content: `Oh ${mentionUser}, o ${interaction.user} te mencionou!!`
        })
    }
};