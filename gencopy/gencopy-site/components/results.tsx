interface ResultsProps {
  prompt: string;
  tagline: string;
  keywords: string[];
  onBack: any;
}

const Results: React.FC<ResultsProps> = (props) => {

  // breaking the keywords into discrete elements
  const keywordElements = [];
  for (let i=0; i < props.keywords.length; i++){
    const element = <div key={i}>{props.keywords[i]}</div>;
    keywordElements.push(element);
  }

  return (
    <>
      <div>
        <div>
          <div><b>Your prompt</b></div>
          <div>{props.prompt}</div>
        </div>
        
        <div>
          <div><b>Tagline</b></div>
          <div>{props.tagline}</div>
        </div>

        <div>
          <div><b>Keywords</b></div>
          <div>{keywordElements}</div>
        </div>
      </div>
      <button onClick={props.onBack}>Back</button>
    </>
  );
};

export default Results;