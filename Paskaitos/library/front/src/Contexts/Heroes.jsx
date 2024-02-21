import { createContext, useReducer, useState } from "react"
import heroesReducer from "../Reducers/heroesReducer"
import useHeroes from "../Hooks/useHeroes"

export const Heroes = createContext()

export const HeroesProvider = ({ children }) => {
  const [heroes, dispatchHeroes] = useReducer(heroesReducer, [])
  const [deleteHero, setDeleteHero] = useState(null)

  const [editHero, setEditHero] = useState(null)
  const [oldEditHero, setOldEditHero] = useState(null)

  const {
    storeHero,
    setStoreHero,
    updateHero,
    setUpdateHero,
    destroyHero,
    setDestroyHero,
  } = useHeroes(dispatchHeroes)

  return (
    <Heroes.Provider
      value={{
        heroes,
        dispatchHeroes,
        storeHero,
        setStoreHero,
        updateHero,
        setUpdateHero,
        destroyHero,
        setDestroyHero,
        deleteHero,
        setDeleteHero,
        editHero,
        setEditHero,
        oldEditHero,
        setOldEditHero,
      }}
    >
      {children}
    </Heroes.Provider>
  )
}
