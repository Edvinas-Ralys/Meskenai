import { useEffect, useReducer, useState } from "react"
import "./table.scss"
import "./App.scss"
import "./form.scss"
import "./buttons.scss"
import axios from "axios"
import counterReducer from "./components/046/counterReducer"

export default function App() {
  const [counter1, setCounter1] = useState(0)
  const [input1, setInput1] = useState(0)
  const [counter2, dispatchCounter2] = useReducer(counterReducer, 0)

  const plus = _ => {
    dispatchCounter2({ type: `add_1` })
  }
  const minus = _ => {
    dispatchCounter2({ type: `rem_1` })
  }
  const reset = _ => {
    dispatchCounter2({ type: `set_0` })
  }
  const addAmount = _ => {
    let action = {}
    const value = parseInt(input1)
    if (isNaN(value)) {
      action = { type: `error` }
    } else {
      action = {
        type: `add`,
        payload: value,
      }
    }

    dispatchCounter2(action)
    setInput1(0)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="state">
          <h1>USE STATE: {counter1}</h1>

          <div className="buttons">
            <button className="black" onClick={_ => setCounter1(c => c + 1)}>
              Add
            </button>
            <button className="black" onClick={_ => setCounter1(c => c - 1)}>
              Minus
            </button>
          </div>
        </div>
        <div className="reducer">
          <h1>USE REDUCER: {counter2}</h1>

          <div className="buttons">
            <button className="black" onClick={reset}>
              Reset
            </button>
            <button className="black" onClick={plus}>
              Add
            </button>

            <button className="black" onClick={minus}>
              Minus
            </button>
            <div className="form">
              <input type="text" value={input1} onChange={e => setInput1(e.target.value)} />
              <button className="green" onClick={addAmount}>
                Add amount
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
