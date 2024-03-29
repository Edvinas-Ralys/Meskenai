import Nav from "../../Components/Nav"
import Create from "./Create"
import Delete from "./Delete"
import Edit from "./Edit"
import List from "./List"

function Layout() {
  return (
    <>
      <Nav />
      <div className="container text-center">
        <div className="row">
          <div className="col-4 mt-4">
            <h1>Authors</h1>
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
      <Edit />
    </>
  )
}

export default Layout
