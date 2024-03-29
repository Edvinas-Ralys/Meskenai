import { useContext } from "react"
import { Auth } from "../../Context/Auth"
import Gate from "../Pages/Authorization/Gate"

function Header() {
  const { user, logout } = useContext(Auth)

  return (
    <nav>
      <div className="menu">
        <a href="#home">Home</a>
        {<Gate roles="admin|user|animal">{user && <a href="#fruits">Fruits</a>}</Gate>}
       <Gate roles="admin|user"><a href="#fruits/create">Add fruit</a></Gate>
       <a href="#users">Users</a>
      </div>
      <div className="login">
        {user && <span className="user">{user.user}</span>}
        {user && <span> | </span>}
        {user && <i onClick={logout}>Log Out</i>}
        {!user && <a href="#register">Register</a>}
        {!user && <span> | </span>}
        {!user && <a href="#login">Login</a>}
      </div>
    </nav>
  )
}

export default Header
