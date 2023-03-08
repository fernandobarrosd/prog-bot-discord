declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DISCORD_TOKEN: string;
            DISCORD_CHANNEL_ID: string;
        }
    }
}


export {};