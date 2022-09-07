interface FormProps {
  prompt: string;
  setPrompt: any;
  onSubmit: any;
  isLoading: boolean;
  characterLimit: number;
}

const Form: React.FC<FormProps> = (props) => {

  // flag for input longer than character limit
  const isPromptValid = props.prompt.length <= props.characterLimit;
  
  // stops user from typing beyond character limit
  const updatePromptValue = (text: string) => {
    if (text.length <= props.characterLimit) {
      props.setPrompt(text);
    }
  }

  return (
    <>
      <p>
        Tell me what your brand is about and I will 
        generate copy and keywords for you.
      </p>
      <input 
        type="text" 
        placeholder="hats" 
        value={props.prompt}
        onChange={(e) => updatePromptValue(e.currentTarget.value)}>
      </input>
      <div>{props.prompt.length}/{props.characterLimit}</div>
      <div>
        <button onClick={props.onSubmit} disabled={!isPromptValid || props.isLoading}>Submit</button>
      </div>
    </>
  );
};

export default Form;