import { useContext } from "react"
import { Router } from "../../../Context/Router"
import Page404 from "../Page404"
import List from "./List"
import Create from "./Create"
import { FruitsProvider } from "../../../Context/Fruits"
import Edit from "./Edit"
import Delete from "./Delete"
import PageGate from "../Authorization/PageGate"

function Index() {
  const { params } = useContext(Router)
  let returnComponent = <Page404 />
  if (params.length === 0) {
    returnComponent = <List />
  } else if (params.length === 1 && params[0] === `create`) {
    returnComponent = (
      <PageGate roles="admin|user">
        <Create />
      </PageGate>
    )
  } else if (params.length === 2 && params[0] === `edit`) {
    returnComponent = (
      <PageGate roles="admin|user">
        <Edit />
      </PageGate>
    )
  } else if (params.length === 2 && params[0] === `delete`) {
    returnComponent = (
      <PageGate roles="admin">
        <Delete />
      </PageGate>
    )
  }

  return (
    <FruitsProvider>
      <div className="start">{returnComponent}</div>
    </FruitsProvider>
  )
}

export default Index
