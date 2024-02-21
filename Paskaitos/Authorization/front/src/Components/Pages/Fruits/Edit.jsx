import { useContext, useEffect, useState } from "react"
import Nav from "../../Elements/Nav"
import { Fruits } from "../../../Context/Fruits"
import { v4 as uuidv4 } from "uuid"
import { Router } from "../../../Context/Router"

function Edit() {
  const { setFruits, fruits, setEditFruit } = useContext(Fruits)
  const {params} = useContext(Router)

  const [name, setName] = useState(``)
  const [color, setColor] = useState(``)
  const [shape, setShape] = useState(``)
  const [currentFruit, setCurrentFruit] = useState(null)

  useEffect(
    _ => {
      if (null !== fruits) {
        const fruit = fruits.find(fruit => fruit.id === Number(params[1]))
        if (!fruit) {
          setCurrentFruit(null)
          return
        } else {
          setCurrentFruit(fruit)
        }
      }
    },
    [fruits, params[1]]
  )

  useEffect(
    _ => {
      if (null !== currentFruit) {
        console.log(currentFruit)
        setName(currentFruit.name)
        setColor(currentFruit.color)
        setShape(currentFruit.shape)
      }
    },
    [currentFruit, setName, setColor, setShape]
  )

  const save = _ => {
    const editFruit = {
      name,
      color,
      shape,
      id: currentFruit.id,
    }
    setFruits(f =>
      f.map(fruit => (fruit.id === editFruit.id ? { ...editFruit, temp: true, preEdit:currentFruit } : fruit))
    )
    setEditFruit(editFruit)
    window.location.hash = `#fruits`
  }

  if (!fruits) {
    return <h1>Loading...</h1>
  }
  if (fruits && !currentFruit) {
    return <h1>No fruits found</h1>
  }

  return (
    <div className="start">
      <Nav />
      <h1>Edit fruit</h1>
      <div className="fruits-bin">
        <div className="form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="color">Color</label>
            <input type="color" value={color} onChange={e => setColor(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="shape">Shape</label>
            <div className="checkboxes">
              <div>
                <input
                  type="checkbox"
                  id="square"
                  checked={`square` === shape}
                  onChange={_ => setShape(`square`)}
                />
                <label htmlFor="square">Square</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="circle"
                  checked={`circle` === shape}
                  onChange={_ => setShape(`circle`)}
                />
                <label htmlFor="circle">Circle</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="rounded"
                  checked={`rounded` === shape}
                  onChange={_ => setShape(`rounded`)}
                />
                <label htmlFor="rounded">Rounded</label>
              </div>
            </div>
            <button onClick={save} className="green" type="button">
              Save new fruit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit
