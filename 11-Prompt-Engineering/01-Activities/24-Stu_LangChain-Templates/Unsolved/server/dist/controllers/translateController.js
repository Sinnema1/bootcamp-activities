import { OpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import dotenv from 'dotenv';
dotenv.config();
// Get the OpenAI API key from the environment variables
const apiKey = process.env.OPENAI_API_KEY;
let model;
if (apiKey) {
    // Initialize the OpenAI model if the API key is provided
    model = new OpenAI({ temperature: 0, openAIApiKey: apiKey, modelName: 'gpt-3.5-turbo' });
}
else {
    console.error('OPENAI_API_KEY is not configured.');
}
// TODO: Create a new prompt template for formatting prompts
const promptTemplate = new PromptTemplate({
    template: "You are a translator and will answer the user’s language questions if they are related to Korean, French, Spanish, and German.\n{question}",
    inputVariables: ["question"]
});
// Format the prompt using the prompt template with the user's text
const formatPrompt = async (question) => {
    return await promptTemplate.format({ question });
};
// Call the OpenAI API to get a response to the formatted prompt
const promptFunc = async (input) => {
    try {
        if (model) {
            return await model.invoke(input);
        }
        return `No OpenAI API key provided. Unable to provide a response.`;
    }
    catch (err) {
        console.error(err);
        throw err;
    }
};
// Handle the POST request to provide translations for the user's text
export const getTranslations = async (req, res) => {
    const userText = req.body.text;
    try {
        if (!userText) {
            res.status(400).json({ text: null, response: 'Please provide text in the request body.' });
            return;
        }
        const formattedPrompt = await formatPrompt(userText);
        const result = await promptFunc(formattedPrompt);
        res.json({ text: userText, prompt: formattedPrompt, response: result });
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error:', error.message);
        }
        res.status(500).json({ text: userText, prompt: null, response: 'Internal Server Error' });
    }
};
