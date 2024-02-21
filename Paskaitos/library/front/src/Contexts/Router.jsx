import { createContext, useEffect, useState } from "react"
import Page404 from "../Pages/Err/Page404"
import AuthorIndex from "../Pages/Authors/Index"
import BookIndex from "../Pages/Books/Index"
import HeroesIndex from "../Pages/Heroes/Index"

export const Router = createContext()

export const RouterProvider = ({ children }) => {
  //*On refresh page doesnt load to home
  const [route, setRoute] = useState(_ => {
    const hash = window.location.hash || `#authors`
    return hash.split(`/`).shift()
  })

  const [params, setParams] = useState(_ => {
    const hash = window.location.hash.split(`/`)
    hash.shift()
    return hash
  })

  //* Possible routes
  const routes = [
    { path: `#authors`, component: <AuthorIndex /> },
    { path: `#books`, component: <BookIndex />},
    {path: `#heroes`, component: <HeroesIndex />}
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

  //*Displays component on what route state is set
  const routeComponent = routes.find(r => r.path === route)?.component || <Page404 />

  return <Router.Provider value={params}>{routeComponent}</Router.Provider>
}
