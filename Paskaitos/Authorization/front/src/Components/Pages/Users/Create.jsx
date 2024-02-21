import { useContext, useState } from "react"
import Nav from "../../Elements/Nav"
import { Users } from "../../../Context/Users"
import { v4 as uuidv4 } from "uuid"

function Create() {
  const [username, setUsername] = useState("")
  const [password, setPassowrd] = useState(``)

  const { setCreateUser} = useContext(Users)

  const register = _ => {
    const user = {
        username,
      password,
      id: uuidv4(),
    }
    setCreateUser(user)
    window.location.hash = `#fruits`
  }

  return (
    <div className="start">
      <Nav />
      <h1>Regiter</h1>
      <div className="users-bin">
        <div className="form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="color">Password</label>
            <input type="password" value={password} onChange={e => setPassowrd(e.target.value)} />
          </div>
          <button onClick={register} className="green" type="button">
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default Create
