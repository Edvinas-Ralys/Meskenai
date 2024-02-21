
import { useContext, useState } from "react"
import Nav from "../../Elements/Nav"
import { Fruits } from "../../../Context/Fruits"
import { v4 as uuidv4 } from 'uuid';

function Create() {
  const [name, setName] = useState("")
  const [color, setColor] = useState("#b72424")
  const [shape, setShape] = useState(`square`)

    const { setCreateFruit, setFruits } = useContext(Fruits)


  const add = _ => {
    const fruit = {
      name,
      color,
      shape,
      id: uuidv4(),
    };
    setFruits(f => [...f, {...fruit, temp:true}])
    setCreateFruit(fruit)
    window.location.hash = `#fruits`
  }

  return (
    <div className="start">
      <Nav />
      <h1>Create fruit</h1>
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
            <button onClick={add} className="green" type="button">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create
