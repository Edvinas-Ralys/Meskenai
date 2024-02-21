import { useContext, useState, useEffect} from "react"
import Nav from "../../Elements/Nav"
import { Users } from "../../../Context/Users"
import { Router } from "../../../Context/Router"

function Delete() {


  const { users, setDeleteUser, setUsers } = useContext(Users)
  const [currentUser, setCurrentUser] = useState(null)
  const {params} = useContext(Router)

  const doDelete = _ => {
    const userID = currentUser.id
    setDeleteUser(currentUser.id)
    setUsers(f => f.map(user => user.id === userID ? {...user, temp:true} : user))

    window.location.hash = `#users`
  }


  useEffect(
    _ => {
      if (null !== users) {
        const user = users.find(user => user.id === Number(params[1]))
        if (!user) {
          setCurrentUser(null)
          return
        } else {
          setCurrentUser(user)
        }
      }
    },
    [users, params[1]]
  )


  if (!users) {
    return <h1>Loading...</h1>
  }
  if (users && !currentUser) {
    return <h1>No users found</h1>
  }
  return (
    <div className="start">
      <Nav />
      <h1>Confirm delete user {currentUser.name}</h1>
      <div className="users-bin">
        <button onClick={_=>window.location.href = `#users`}>Cancel</button>
        <button onClick={doDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Delete
