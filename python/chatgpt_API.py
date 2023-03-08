import os
import openai
openai.api_key = "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"
completion = openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "user", "content": "Write a JavaScript hello world"}
  ],
  max_tokens = 70,
)

print(completion.choices[0].message)