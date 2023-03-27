declare global {
    namespace NodeJS {
        export interface ProcessEnv {
            YOUTUBE_API_KEY: string;
        }
    }
}


export {};