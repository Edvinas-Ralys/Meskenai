import { useContext } from "react"
import Nav from "../../Components/Nav"
import Create from "./Create"
import Delete from "./Delete"
import Edit from "./Edit"
import List from "./List"
import { Heroes } from "../../Contexts/Heroes"



function Layout() {

  const {editHero} = useContext(Heroes)

  return (
    <>
      <Nav />
      <div className="container text-center">
        <div className="row">
          <div className="col-4 mt-4">
            <h1>Heroes</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4 mt-4">
            <Create />
          </div>
          <div className="col-8 mt-4">
           <List />
          </div>
        </div>
      </div>
      <Delete />
      {editHero && <Edit />}
    </>
  )
}

export default Layout
