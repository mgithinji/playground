import React from "react";
import Form from "./form";
import Results from "./results";

const GenCopy: React.FC = () => {
  
  // API endpoint for the GenCopy API in AWS
  const ENDPOINT: string = "https://l6yeiq65v2.execute-api.us-east-1.amazonaws.com/prod/generate_tagline_and_keywords"

  // global constants
  const CHARACTER_LIMIT: number = 32

  // using React hooks to store user-provided prompt in a variable
  const [prompt, setPrompt] = React.useState("");

  // hooks for the AI generated tagline and keywords
  const [tagline, setTagline] = React.useState("");
  const [keywords, setKeywords] = React.useState([]);

  // bool hook to indicate whether there's a result to display or not
  const [hasResult, setHasResult] = React.useState(false);

  // bool hook to check if result is loading
  const [isLoading, setIsLoading] = React.useState(false);
  
  // do something when user clicks "Submit"
  const onSubmit = () => {
    console.log("Submitting: " + prompt);
    setIsLoading(true); // when loading set true
    fetch(`${ENDPOINT}?prompt=${prompt}`)
      .then((res) => res.json())
      .then(onResult);
  };

  // saving API result to our variables
  const onResult = (data: any) => {
    setTagline(data.tagline);
    setKeywords(data.keywords);
    setHasResult(true);
    setIsLoading(false); // after results are provided reset
  };

  // returning to input page after results are displayed
  const onReset = () => {
    setPrompt("");
    setHasResult(false);
    setIsLoading(false);
  };

  let displayedElement = null; 

  if (hasResult) {
    displayedElement = <Results prompt={prompt} tagline={tagline} keywords={keywords} onBack={onReset}/>
  } else {
    displayedElement = <Form prompt={prompt} setPrompt={setPrompt} onSubmit={onSubmit} characterLimit={CHARACTER_LIMIT} isLoading={isLoading}/>
  } 

  return (
    <>
      <h1 className="text-3xl">GenCopy!</h1>
      <h3>Your AI marketing partner</h3>
      {displayedElement}
    </>
  );
};

export default GenCopy;