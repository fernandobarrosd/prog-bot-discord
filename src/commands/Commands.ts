import { Command } from "../@types/Command";
import { HelloCommand } from "./HelloCommand";
import { HelloWorldCommand } from "./HelloWorldCommand";
import { MentionUser } from "./MentionUser";

export const Commands : Command[] = [
    HelloCommand, 
    MentionUser,
    HelloWorldCommand
];