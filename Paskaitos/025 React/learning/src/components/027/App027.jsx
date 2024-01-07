import "./App.scss";
import "./components/027/buttons.scss";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [sqaures, setSquare] = useState([]);

  const addSquare = () => {
    setSquare((s) => [...s, 5]);
  };
  const resetSquare = () => {
    setSquare([]);
  };

  const plusFun = () => {
    setCounter((c) => c + 1);
    setCounter((c) => c + 1); // Vykdoma ne is karto. Vykdoma ties h2
    console.log(counter);
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>State</h1>
        <button onClick={plusFun}>Plus</button>
        <button onClick={reset}>Reset</button>
        <h2>{counter}</h2>
        <div className="squares">
          {sqaures.map((sqaure, index) => (
            <div key={index} className="sqaure">
              {sqaure}
            </div>
          ))}
        </div>
        <button onClick={addSquare}>Add square</button>
        <button onClick={resetSquare}>Reset squares</button>
      </header>
    </div>
  );
}

export default App;
