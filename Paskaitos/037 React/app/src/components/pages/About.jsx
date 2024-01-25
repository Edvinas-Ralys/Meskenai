import Link from "./Link"
import { useContext } from "react"
import Nav from "./Nav"
import {ParameterContext} from './Layout'

function About() {

const {params} = useContext(ParameterContext)

  return (
    <>
    <Nav />
    <main>
      <h1>About</h1>
      <h2>Parameter 1: {params[0]} </h2>
      <h2>Parameter 2: {params[1]}</h2>
      <div className="buttons">
      <Link href={"#about/bebras"}>About Bebras</Link>
      </div>

    </main>
    </>

  )
}

export default About
