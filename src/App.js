import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
    setResult((result) => result - Number(inputRef.current.value))
  };
 
  function times(e) { 
    setResult((result) => result * Number(inputRef.current.value))

  }; 
 
  function divide(e) { 
    if (inputRef.current.value === "0") {
      return;
    }
    setResult((result) => result / Number(inputRef.current.value))

  };
 
  function resetInput(e) { 
    inputRef.current.value = ""
  }; 
 
  function resetResult(e) { 
  	setResult(0)
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}>  {result}  </p>
        <div>
          <input 
            pattern="[0-9]" 
            ref={inputRef} 
            type="number" 
            placeholder="Type a number" 
          />  
        </div>
        <div className="button-group">
          <button  type="button" onClick={plus}>add</button> 
          <button  type="button" onClick={minus}>subtract</button> 
          <button  type="button" onClick={times}>multiply</button> 
          <button  type="button" onClick={divide}>divide</button> 
          <button  type="button" onClick={resetInput}>reset input</button> 
          <button  type="button" onClick={resetResult}>reset result</button>  
        </div> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
