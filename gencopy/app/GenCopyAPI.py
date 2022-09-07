from fastapi import FastAPI, HTTPException
from GenCopy import generate_tagline, generate_keywords, MAX_INPUT_LENGTH
from mangum import Mangum # used for creating the handler
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
handler = Mangum(app=app) # handler for Lambda function to invoke

# mitigating CORS so browser doesn't block API responses
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

# API for generating a tagline
@app.get("/generate_tagline")
async def generate_tagline_api(prompt: str):
    """API for AI-generated (GPT-3) business taglines based on user prompt."""
    validate_prompt(prompt=prompt)
    tagline = generate_tagline(prompt=prompt)
    return {"tagline": tagline, "keywords": []}

# API for generating keywords
@app.get("/generate_keywords")
async def generate_keywords_api(prompt: str):
    """API for AI-generated (GPT-3) business keywords based on user prompt."""
    validate_prompt(prompt=prompt)
    keywords = generate_keywords(prompt=prompt)
    return {"tagline": None, "keywords": keywords}

# API for generating tagline and keywords
@app.get("/generate_tagline_and_keywords")
async def generate_tagline_and_keywords_api(prompt: str):
    """API for AI-generated (GPT-3) business tagline and keywords based on user prompt."""
    validate_prompt(prompt=prompt)
    tagline = generate_tagline(prompt=prompt)
    keywords = generate_keywords(prompt=prompt)
    return {"tagline": tagline, "keywords": keywords}

# validate the user's prompt is acceptable
def validate_prompt(prompt: str):
    """Validation function for ensuring user's prompt meets acceptance criteria"""
    
    # validating prompt length
    if len(prompt) >= MAX_INPUT_LENGTH:
        raise HTTPException(status_code=400, detail="Prompt exceeds max length of {} characters.".format(MAX_INPUT_LENGTH))

# To make the API live locally, run the following in the terminal
# uvicorn GenCopyAPI:app --reload