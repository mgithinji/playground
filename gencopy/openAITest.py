import os
from urllib import response
import openai

openai.api_key = os.getenv('OPENAI_API_KEY')

# subject = "coffee"
# prompt = "Write a confident tagline for a {} business:".format(subject)
prompt = "Write an worship hymn:"

response = openai.Completion.create(model="text-davinci-002", prompt=prompt, max_tokens=500, temperature=0.11)
# response = openai.Completion.create(model="text-curie-001", prompt=prompt, max_tokens=30, temperature=0.8)
print(response["choices"][0]["text"])