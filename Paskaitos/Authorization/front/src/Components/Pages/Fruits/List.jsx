import { useContext } from "react"
import Nav from "../../Elements/Nav"
import { Fruits } from "../../../Context/Fruits"
import Fruit from "./Fruit"

function List() {
  const { fruits } = useContext(Fruits)

  if (null === fruits) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="start">
      <Nav />
      <h1>Fruits' list</h1>
      <div className="fruits">
        {fruits.map((fruit, i) => (
          <Fruit key={i} fruit={fruit} />
        ))}
      </div>
    </div>
  )
}

export default List
