import { YoutubeDataAPI } from "youtube-v3-api";
import { config } from "dotenv";

config();

const { YOUTUBE_API_KEY } = process.env;

export const youtubeAPI = new YoutubeDataAPI(YOUTUBE_API_KEY);