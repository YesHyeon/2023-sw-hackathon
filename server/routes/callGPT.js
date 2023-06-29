require('dotenv').config();
const {Configuration, OpenAIApi} = require("openai");
//파파고 api 받아와서 영어로 돌리고 gpt 한테 넣고 영어로 받아서 파파고로 한국어로 돌리기

async function callChatGPT(prompt) {
    const configuration = new Configuration({
      apiKey: process.env.OpenAIApi
    });
  
    try {
      const openai = new OpenAIApi(configuration);
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: prompt }],
      });
      return response.data.choices[0].message;
    } catch (error) {
      console.error("Error calling ChatGPT API:", error);
      return null;
    }
  }

  module.exports = {callChatGPT};
  
