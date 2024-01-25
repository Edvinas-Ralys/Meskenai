import { useEffect, useState, useCallback } from "react"
import "./form.scss"
import "./buttons.scss"
import "./App.scss"
import axios from "axios"
import { v4 as uuidv4 } from "uuid";
import Messages from "./components/039/Messages"

const URL = "http://localhost:3001/animals"

function App() {
  const [animalInput, setAnimalInput] = useState("")
  const [animalEditInput, setAnimalEditInput] = useState(``)
  const [animals, setAnimals] = useState(null)
  const [storeAnimals, setStoreAnimals] = useState(null)
  const [updateAnimals, setUpdateAnimals] = useState(null)
  const [destroyAnimal, setDestroyAnimal] = useState(null)
  const [editStatus, setEditStatus] = useState(null)
  const [error, setError] = useState(null)
  const [messages, setMessages] = useState([])

  const addMessage = useCallback((type, text) =>{
    const id = uuidv4();
    setMessages(prevMessages => [{id, type, text}, ...prevMessages])
    setTimeout(_=>{
      setMessages(prevMessages => prevMessages.filter(m => m.id !== id))
    }, 3000)
  }, [])

  useEffect(
    _ => {
      if (null === animals) {
        return
      }
      setAnimalEditInput(animals.find(animal => animal.id === editStatus)?.name || ``)
    },
    [editStatus]
  )

  const change = animal => {
    if (editStatus === null || editStatus !== animal.id) {
      setEditStatus(animal.id)
    } else {
      setUpdateAnimals({ name: animalEditInput, id: animal.id })
    }
  }

  useEffect(_ => {
    axios
      .get(URL)
      .then(res => {
        setAnimals(res.data)
        setError(null)
      })
      .catch(err => {
        if(err.response){
          setError(err.response.status + ` ` + err.response.statusText)
        }
        else{
          setError(err.message)
        }
        console.log(err)
      })
  }, [])

  const submit = _ => {
    setStoreAnimals({ name: animalInput })
  }

  useEffect(
    _ => {
      if (null !== storeAnimals) {
        axios
          .post(URL, storeAnimals)
          .then(res => {
            setAnimals([{ name: storeAnimals.name, id: res.data.id }, ...animals])
            setAnimalInput("")
            setError(null)
            addMessage(res.data.type, res.data.message)
          })
          .catch(err => console.log(err))
      }
    },
    [storeAnimals]
  )

  useEffect(
    _ => {
      if (null !== destroyAnimal) {
        axios
          .delete(`${URL}/${destroyAnimal.id}`)
          .then(res => {
            setAnimals(animals.filter(animal => animal.id !== destroyAnimal.id))
            setError(null)
            addMessage(res.data.type, res.data.message)
          })
          .catch(err => {
            console.log(err)
            addMessage(`danger`, err.response ? err.response.status + ` ` + err.response.statusText : err.message)
          })

      }
    },
    [destroyAnimal]
  )

  useEffect(
    _ => {
      if (null !== updateAnimals) {
        axios
          .put(`${URL}/${updateAnimals.id}`, updateAnimals)
          .then(res => {
            setAnimals(
              animals.map(animal =>
                animal.id === updateAnimals.id ? { ...animal, name: updateAnimals.name } : animal
              )
            )
            addMessage(res.data.type, res.data.message)
            setEditStatus(null)
            setError(null)
          })
          .catch(err => console.log(err))
      }
    },
    [updateAnimals]
  )

  return (
    <div className="App">
      <header className="App-header">
        <h1>React and Express full of Animals</h1>
        <div className="animal-list">
          {animals &&
            animals.length !== 0 &&
            animals.map(animal => (
              <div className="animal" key={animal.id}>
                <h3
                  style={{
                    width: `200px`,
                    display: editStatus === animal.id ? `none` : `block`,
                  }}
                >
                  {animal.name}
                </h3>
                <div
                  className="form"
                  style={{
                    display: editStatus === animal.id ? `block` : `none`,
                  }}
                >
                  <input
                    type="text"
                    value={animalEditInput}
                    onChange={e => setAnimalEditInput(e.target.value)}
                  />
                </div>

                <div className="buttons">
                  <button className="green" onClick={_ => setDestroyAnimal(animal)}>
                    Release
                  </button>
                  <button className="yellow" onClick={_ => change(animal)}>
                    {editStatus === animal.id ? `Submit` : `Edit`}
                  </button>
                </div>
              </div>
            ))}
        </div>

        {animals && !animals.length && <p>No animals found</p>}
        {!animals && error ? <p>{error}</p> : !animals ? <p>Animals are loading...</p> : null}
        <div className="form">
          <input
            type="text"
            placeholder="Enter Animal"
            value={animalInput}
            onChange={e => setAnimalInput(e.target.value)}
          />
          <div className="buttons">
            <button className="green" onClick={submit}>
              Submit
            </button>
            <button className="red" onClick={_ => setAnimalInput("")}>
              Clear
            </button>
          </div>
        </div>
      </header>
      <Messages messages={messages} />
    </div>
  )
}

export default App
