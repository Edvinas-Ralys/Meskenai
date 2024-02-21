import { createContext, useEffect, useState } from "react"
import HomeIndex from "../Components/Pages/Home/Index"
import Login from "../Components/Pages/Authorization/Login"
import FruitIndex from "../Components/Pages/Fruits/Index"
import Page404 from "../Components/Pages/Page404"
import Page401 from "../Components/Pages/Page401"
import UserIndex from "../Components/Pages/Users/Index.jsx"


export const Router = createContext()

export const RouterProvider = ({ children }) => {
  const page401 = <Page401 />

  //*On refresh page doesnt load to home
  const [route, setRoute] = useState(_ => {
    const hash = window.location.hash || `#home`
    return hash.split(`/`).shift()
  })

  const [params, setParams] = useState(_ => {
    const hash = window.location.hash.split(`/`)
    hash.shift()
    return hash
  })

  const [notAuthorized, setNotAuthorized] = useState(null)

  //* Possible routes
  const routes = [
    { path: `#home`, component: <HomeIndex /> },
    { path: `#login`, component: <Login /> },
    { path: `#fruits`, component: <FruitIndex /> },
    {path:`#register`, component:<UserIndex to="register"/>},
    {path:`#users`, component:<UserIndex/>}
  ]

  //*Effect to check route on window load. Sets route and params
  useEffect(_ => {
    const handleRouteChange = _ => {
      const hash = window.location.hash.split(`/`)
      setRoute(hash.shift())
      setParams(hash)
    }
    window.addEventListener(`hashchange`, handleRouteChange)
    return _ => window.removeEventListener(`hashchange`, handleRouteChange)
  }, [])

  const show401Page = _ => {
    setNotAuthorized(page401)
  }

  useEffect(
    _ => {
      setNotAuthorized(null)
    },
    [route, setNotAuthorized]
  )

  //*Displays component on what route state is set
  const routeComponent = routes.find(r => r.path === route)?.component || <Page404 />

  return (
    <Router.Provider value={{ params, show401Page }}>
      {notAuthorized ?? routeComponent}
    </Router.Provider>
  )
}
