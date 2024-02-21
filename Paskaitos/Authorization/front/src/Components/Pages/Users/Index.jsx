import { useContext } from "react"
import { Router } from "../../../Context/Router"
import Page404 from "../Page404"
import { UsersProvider } from "../../../Context/Users"
import PageGate from "../Authorization/PageGate"
import Create from "./Create"
import List from "./List"
import Delete from "./Delete"
import Edit from "./Edit"

function Index({to}) {
  const { params } = useContext(Router)
  let returnComponent = <Page404 />
  if(to === `register`){
    returnComponent = <Create />
  } else if(params.length === 0){
    returnComponent = <List />
  } else if( params.length === 2 && params[0] === `delete`){
    returnComponent = <Delete />
  } else if(params.length === 2 && params[0] === `edit`){
    returnComponent = <Edit />
  }


  return (
    <UsersProvider>
      <div className="start">{returnComponent}</div>
    </UsersProvider>
  )
}

export default Index
