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
    
    const element = 
    <div className="bg-blue-200 text-slate-700 rounded-md p-1 px-2 text-sm">
      {props.keywords[i]}
    </div>;

    keywordElements.push(element);
  }

  const keywordElementsHolder = <div className="flex flex-wrap gap-2">{keywordElements}</div>

  const resultSection = (label: string, body: any) => {
    return (
      <div className="bg-slate-700 p-4 my-3 rounded-md">
        <div className="text-slate-400 text-sm font-bold mb-2">{label}</div>
        <div>{body}</div>
      </div>
    );
  }

  return (
    <>

      <div className="mb-4">
        {resultSection("Your business", <div className="text-lg font-bold">{props.prompt}</div>)}
        {resultSection("Branding tagline", props.tagline)}
        {resultSection("Branding keywords", keywordElementsHolder)}
      </div>

      <button 
        className="bg-gradient-to-r from-blue-200 to-purple-400 disabled:opacity-50 w-full rounded-md p-2 text-lg"
        onClick={props.onBack}
        >Back
      </button>

    </>
  );
};

export default Results;