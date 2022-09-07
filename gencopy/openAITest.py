import os
from urllib import response
import openai

openai.api_key = os.getenv('OPEN_AI_KEY')

subject = "coffee"
# prompt = "Write a confident tagline for a {} shop:".format(subject)
prompt = "Write an worship hymn:"

response = openai.Completion.create(model="text-davinci-002", prompt=prompt, max_tokens=500, temperature=0.11)
print(response["choices"][0]["text"])