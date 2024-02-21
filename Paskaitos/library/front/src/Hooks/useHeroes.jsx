import { useEffect, useState } from "react"
import { SERVER_URL } from "../Components/Constants/main"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
import * as a from "../Actions/heroes"

function useHeroes(dispatchHeroes) {
  const [storeHero, setStoreHero] = useState(null)
  const [updateHero, setUpdateHero] = useState(null)
  const [destroyHero, setDestroyHero] = useState(null)


  useEffect(
    _ => {
      axios
        .get(`${SERVER_URL}/heroes`)
        .then(res => {
          dispatchHeroes(a.getHeroes(res.data))
        })

        .catch(err => console.log(err))
    },
    [dispatchHeroes]
  )

  useEffect(
    _ => {
      if (null !== storeHero) {
        const uuid = uuidv4()
        dispatchHeroes(a.storeHeroAsTemp({...storeHero, id: uuid}))
        const withoutHero = {...storeHero}
        delete withoutHero.hero
        axios
          .post(`${SERVER_URL}/heroes`, {...storeHero, id: uuid})
          .then(res => {
            setStoreHero(null)
            dispatchHeroes(a.storeHeroAsReal(res.data))
          })
          .catch(err => {
            dispatchHeroes(a.storeHeroUndo({storeHero, id:uuid}))
            setStoreHero(null)
            console.log(err)
          })
      }
    },
    [storeHero, dispatchHeroes]
  )


  useEffect(_=>{
    if(null !== destroyHero){
      dispatchHeroes(a.deleteHeroAsTemp(destroyHero))
      axios.delete(`${SERVER_URL}/heroes/${destroyHero.id}`)
        .then(res => {
          setDestroyHero(null)
          dispatchHeroes(a.deleteHeroAsReal(res.data))
        })
        .catch(err => {
          setDestroyHero(null)
          dispatchHeroes(a.deleteHeroUndo(destroyHero))
          console.log(err)
        })
    }
  }, [destroyHero, dispatchHeroes])

  useEffect(_=>{
    if(null !== updateHero){
      dispatchHeroes(a.updateHeroTemp(updateHero))
      axios.put(`${SERVER_URL}/heroes/${updateHero.id}`, updateHero)
        .then(res => {
          dispatchHeroes(a.updateHeroReal(res.data))
          setUpdateHero(null)
        })
        .catch(err => {
          console.log(err)
          dispatchHeroes(a.updateHeroUndo(updateHero))
        })
    }
  }, [updateHero, dispatchHeroes])


  return {
    storeHero,
    setStoreHero,
    updateHero,
    setUpdateHero,
    destroyHero,
    setDestroyHero,
  }
}

export default useHeroes
