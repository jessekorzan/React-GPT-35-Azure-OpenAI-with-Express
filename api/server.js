import express from 'express';
import { Configuration, OpenAIApi } from "azure-openai";
import bodyParser from 'body-parser';
const api = express();
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());

const openai = new OpenAIApi(
    new Configuration({
        azure: {
            apiKey: process.env['openAI'],
            endpoint: process.env['endpoint'],
            deploymentName: "gpt35",
        }
    }),
);

api.post('/response', async (req, res) => {
    const _term = req.body.prompt;
    const response = await openai.createChatCompletion({
        messages: [
            { "role": "system", "content": "You are a jolly fun chat assistant who enjoys conversation." },
            { "role": "user", "content": "What is the best movie that Quentin Taratinto made?" },
            { "role": "assistant", "content": "Tough question to truly asnwer correctly. For my money, it has to be Pulp Fiction." },
            { "role": "user", "content": _term }
        ]
    });
    //console.log(response.data.choices[0])
    res.send(response.data);
})
export default api;