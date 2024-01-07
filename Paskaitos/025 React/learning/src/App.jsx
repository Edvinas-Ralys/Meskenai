import { useState } from "react";
import "./App.scss";
import A from "./components/035/A";
import { Context } from "./components/035/Context";
import { ColorContext } from "./components/035/ColorContext";

export default function App() {
  const [counter01, setCounter01] = useState(0);
  const [counter02, setCounter02] = useState(0);
  const hello = `Hello, World!`;
  const [color, setColor] = useState(`#000000`);

  return (
    <div className="App">
      <header className="App-header">
        <h1>CONTEXT</h1>
        <h2>
          {" "}
          Counter ONE: {counter01} Counter TWO: {counter02}
        </h2>
        <div className="buttons">
          <button onClick={(_) => setCounter01((c) => c + 1)}>
            Counter ONE
          </button>
          <button onClick={(_) => setCounter02((c) => c + 1)}>
            Counter TWO
          </button>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <ColorContext.Provider
          value={{
            color,
          }}
        >
          <Context.Provider
            value={{
              counter02,
              hello,
            }}
          >
            <A counter01={counter01} />
          </Context.Provider>
        </ColorContext.Provider>
      </header>
    </div>
  );
}
