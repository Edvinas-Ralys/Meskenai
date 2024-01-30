import { useReducer, useState } from "react"
import "./table.scss"
import "./App.scss"
import "./form.scss"
import "./buttons.scss"
import counterReducer from "./Reducers/counterMasterReducer"
import * as a from "./Actions/counterAction"

export default function App() {
  const [input1, setInput1] = useState(``)
  const [counter, dispatchCounter] = useReducer(counterReducer, {number: 0, error:``})


  const addAmount = _ => {
    const value = parseInt(input1)
    if (isNaN(value)) {
      dispatchCounter(a.error(`Please enter a number`))
    } else {
        dispatchCounter(a.add(value))
    }
    setInput1(``)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="reducer">
          <h1>USE REDUCER: {counter.number}</h1>
          {counter.error && <p>{counter.error}</p>}

          <div className="buttons">
            <button className="black" onClick={_=>dispatchCounter(a.set0())}>
              Reset
            </button>
            <button className="black" onClick={_=> dispatchCounter(a.add1())} >
              Add
            </button>

            <button className="black" onClick={_=>dispatchCounter(a.rem1())}>
              Minus
            </button>
            <div className="form">
              <input type="text" value={input1} onChange={e => setInput1(e.target.value)} />
              <button className="green" onClick={addAmount} >
                Add amount
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
