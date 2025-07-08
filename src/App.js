import Keypad from "./keypad";
import { useState } from "react";
import "./App.css";
function App() {
  let [input, setInput] = useState("");
  function handleClick(val) {
      setInput(input+val)
  }
  function calculate(){
    let ans=eval(input)
    setInput(ans)
  }
  function handleClear(){
    setInput('')
  }
  return (
    <div className="container">
      <h1>Calculator App using React</h1>
      <div className="calculator">
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          className="output"
        />
        <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate}/>
      </div>
    </div>
  );
}

export default App;
