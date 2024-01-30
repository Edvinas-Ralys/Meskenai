import "./table.scss"
import "./App.scss"
import "./form.scss"
import "./buttons.scss"
import useLocalStorage from "./Hooks/useLocalStorage"

export default function App() {
  const [racoons, setRacoons, meskenai, setMeskenai] = useLocalStorage(`racoons`, `meskenai`, 0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Custom hook</h1>
        <h2>Now we have {racoons} racoons</h2>
        <h2>Meskenai {meskenai}</h2>
        <div className="buttons">
          <button className="green" onClick={_ => setRacoons(r => r + 1)}>

            Add one
          </button>
          <button onClick={_=> setMeskenai(m => m+1)}></button>
        </div>
      </header>
    </div>
  )
}
