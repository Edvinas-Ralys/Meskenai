import { useContext } from "react"
import { ParameterContext } from "./Layout"

function Link({ href, children }) {

    const {path} = useContext(ParameterContext)

  return (
    <a className="nav-link" style={{
        color: path === href ? `skyblue` : `orange`
    }} href={href}>
      {children}
    </a>
  )
}

export default Link
