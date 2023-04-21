import openaiClient from './api.js';

const generate = async (queryDescription) => {
  const response = await openaiClient.createCompletion({
    model: "text-davinci-003",
    prompt: `Convert this query into a SQL query:\n\n${queryDescription}.`,
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })
  return response.data.choices[0].text
}

export default generate

