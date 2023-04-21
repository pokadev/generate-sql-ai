import openaiClient from "./api.js";

const generate = async (queryDescription) => {
  const daVinci = async (queryDescription) => {
    const response = await openaiClient.createCompletion({
      model: "text-davinci-003",
      prompt: `Convert this query into a SQL query:\n\n${queryDescription}.`,
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    return response.data.choices[0].text;
  };
  const chatGpApi = async (queryDescription) => {
    const messages = [
      {
        role: "system",
        content: `You are a translator from plain Russian to SQL.`,
      },
      {
        role: "user",
        content: `Convert the following natural language description into a SQL quety: \n\nshow all elements from the table users.`,
      },
      {
        role: "assistant",
        content: `SELECT * FROM users;`,
      },
      {
        role: "user",
        content: `Convert the following natural language description into a SQL quety: \n\n${queryDescription}.`,
      }
    ];
    const response = await openaiClient.createChatCompletion({
      model: "gpt-3.5-turbo",
      prompt: messages,
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    return response.data.choices[0].message.content;
  }
  return await daVinci(queryDescription);
};

export default generate;
