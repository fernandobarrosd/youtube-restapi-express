import { NextApiRequest, NextApiResponse } from "next";
import { youtubeAPI } from "../../src/services/youtube-api-service";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(201).send("Youtube RestApi Express");
    console.log(youtubeAPI);
}