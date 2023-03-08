import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-mKiOdj05I0xVUxoQeuGVMiVl",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: "Write a python hello world"}],
    max_tokens:70,
  });
console.log(completion.data.choices[0].message);