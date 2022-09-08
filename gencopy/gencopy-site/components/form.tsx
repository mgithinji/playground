interface FormProps {
  prompt: string;
  setPrompt: any;
  onSubmit: any;
  isLoading: boolean;
  characterLimit: number;
}

const Form: React.FC<FormProps> = (props) => {

  // flag for input longer than character limit
  const isPromptValid = props.prompt.length < props.characterLimit;
  
  // stops user from typing beyond character limit
  const updatePromptValue = (text: string) => {
    if (text.length <= props.characterLimit) {
      props.setPrompt(text);
    }
  }

  // user-interface elements shown for valid/invalid input
  let statusColor = "text-slate-500";
  let statusText = null;
  if (!isPromptValid) {
    statusColor = "text-red-500"
    statusText = `Input must be less than ${props.characterLimit} characters`
  }

  return (
    <>

      <div className="mb-6 text-slate-300">
        <p>
          Tell me what your brand is about and I will 
          generate copy and keywords for you.
        </p>
      </div>
      
      <input 
        className="p-2 w-full rounded-md focus:outline-purple-400 focus:outline text-slate-700"
        type="text" 
        placeholder="hats" 
        value={props.prompt}
        onChange={(e) => updatePromptValue(e.currentTarget.value)}>
      </input>

      <div className={statusColor + " flex justify-between my-2 mb-6 text-sm"}>
        <div>{statusText}</div>
        <div>
          {props.prompt.length}/{props.characterLimit}
        </div>
        
      </div>
      
      <div>
        <button 
          className="bg-gradient-to-r from-blue-200 to-purple-400 disabled:opacity-50 w-full rounded-md p-2 text-lg"
          onClick={props.onSubmit} 
          disabled={!isPromptValid || props.isLoading}
          >Submit
        </button>
      </div>
    </>
  );
};

export default Form;