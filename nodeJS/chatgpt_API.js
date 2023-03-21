import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-mKiOdj05I0xVUxoQeuGVMiVl",
    apiKey:"OPENAI_API_KEY",
});
const openai = new OpenAIApi(configuration);
const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: "Write a python hello world"}],
    max_tokens:70,
  });
console.log(completion.data.choices[0].message);
