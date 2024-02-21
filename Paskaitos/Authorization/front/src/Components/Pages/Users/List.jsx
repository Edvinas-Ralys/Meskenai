import { useContext } from "react"
import Nav from "../../Elements/Nav"
import { Users } from "../../../Context/Users"
import User from "./User"

function List() {
  const { users } = useContext(Users)

  if (!users) {
    return <>
    <Nav />
    <h1>Loading...</h1>
    </>
  }

  if (users.error) {
    return <>
    <Nav />
    <h1>Server error</h1>
    </>
  }

  return (
    <div className="start">
      <Nav />
      <h1>Users' list</h1>
      <div className="users-box">
        {users.map((user, i) => (
          <User key={i} user={user} />
        ))}
      </div>
    </div>
  )
}

export default List
