import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const incrementCounter = () => {
    if (count < 100)  setCount(count+step)
    return;
  };
  const decrementCounter = () => {
    if (count > 0) setCount(count - step);
    return;
  };
  const resetCounter = () => {
    setCount(0);
  };

  return (
    <>
      <h1>useState Challenge</h1>
      <h4>Count: {count}</h4>
      <h4>Step:</h4>{" "}
      <input
        type="number"
        value={step}
        onChange={(e) => {
          setStep(Number(e.target.value));
        }}
      ></input>
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={incrementCounter}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-md"
        >
          Increment
        </button>
        <button
          onClick={decrementCounter}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-md"
        >
          Decrement
        </button>
        <button
          onClick={resetCounter}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-md"
        >
          Reset
        </button>
      </div>
      {/* one important thing that we learned is that when we are incrementing the value of the counter, we should not use the operators, like count++ or count--, because it leads to unexpected behaviour because it returns the orignal value, then increment or decrement it, however the updates state is lost then. */}
    </>
  );
}


export default App;
