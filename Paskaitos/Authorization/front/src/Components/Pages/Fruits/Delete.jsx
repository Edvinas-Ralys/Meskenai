import { useContext, useState, useEffect} from "react"
import Nav from "../../Elements/Nav"
import { Fruits } from "../../../Context/Fruits"
import { Router } from "../../../Context/Router"

function Delete() {


  const { fruits, setDeleteFruit, setFruits } = useContext(Fruits)
  const [currentFruit, setCurrentFruit] = useState(null)
  const {params} = useContext(Router)

  const doDelete = _ => {
    const fruitID = currentFruit.id
    setDeleteFruit(currentFruit.id)
    setFruits(f => f.map(fruit => fruit.id === fruitID ? {...fruit, temp:true} : fruit))

    window.location.hash = `#fruits`
  }


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


  if (!fruits) {
    return <h1>Loading...</h1>
  }
  if (fruits && !currentFruit) {
    return <h1>No fruits found</h1>
  }
  return (
    <div className="start">
      <Nav />
      <h1>Confirm delete fruit {currentFruit.name}</h1>
      <div className="fruits-bin">
        <button onClick={_=>window.location.href = `#fruits`}>Cancel</button>
        <button onClick={doDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Delete
