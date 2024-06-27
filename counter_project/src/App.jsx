import { useState } from "react";
import "./App.css";



function App() {
  //  let value = 10;

  let [counter, setCounter] = useState(10);

  const addValue = () => {
    // value = value + 2;
    counter += 1;
    setCounter(counter);
    // console.log("added value", counter);
  };
  let  removeValue = () => {

    counter -= 1;
    setCounter(counter);
  }

  return (
    <>
      <h1>Counter App </h1>
      <h2>The value of counter is :{counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
      <p>This place the value is :{counter}</p>

      <footer>At footer the value is :{counter}</footer>
    </>
  );
}

export default App;
