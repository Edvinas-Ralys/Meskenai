import { useEffect, useState } from "react"
import { SERVER_URL } from "../Components/Constants/main"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
import * as a from "../Actions/authors"

function useAuthor(dispatchAuthors) {
  const [storeAuthor, setStoreAuthor] = useState(null)
  const [updateAuthor, setUpdateAuthor] = useState(null)
  const [destroyAuthor, setDestroyAuthor] = useState(null)



  useEffect(
    _ => {
      axios
        .get(`${SERVER_URL}/authors`)
        .then(res => {
          dispatchAuthors(a.getAuthors(res.data))
        })

        .catch(err => console.log(err))
    },
    [dispatchAuthors]
  )

  useEffect(
    _ => {
      if (null !== storeAuthor) {
        const uuid = uuidv4()
        dispatchAuthors(a.storeAuthorAsTemp({...storeAuthor, id: uuid}))
        axios
          .post(`${SERVER_URL}/authors`, {...storeAuthor, id: uuid})
          .then(res => {
            setStoreAuthor(null)
            dispatchAuthors(a.storeAuthorAsReal(res.data))

          })
          .catch(err => {
            dispatchAuthors(a.storeAuthorUndo({storeAuthor, id:uuid}))
            setStoreAuthor(null)
            console.log(err)
          })
      }
    },
    [storeAuthor, dispatchAuthors]
  )

  useEffect(_=>{
    if(null !== destroyAuthor){
      dispatchAuthors(a.deleteAuthorAsTemp(destroyAuthor))
      axios.delete(`${SERVER_URL}/authors/${destroyAuthor.id}`)
        .then(res => {
          setDestroyAuthor(null)
          dispatchAuthors(a.deleteAuthorAsReal(res.data))
        })
        .catch(err => {
          setDestroyAuthor(null)
          dispatchAuthors(a.deleteAuthorUndo(destroyAuthor))
          console.log(err)
        })
    }
  }, [destroyAuthor, dispatchAuthors])


  useEffect(_=>{
    if(null !== updateAuthor){
      dispatchAuthors(a.updateAuthorTemp(updateAuthor))
      axios.put(`${SERVER_URL}/authors/${updateAuthor.id}`, updateAuthor)
        .then(res => {
          dispatchAuthors(a.updateAuthorReal(res.data))
          setUpdateAuthor(null)
        })
        .catch(err => {
          console.log(err)
          dispatchAuthors(a.updateAuthorUndo(updateAuthor))
        })
    }
  }, [updateAuthor, dispatchAuthors])

  return {
    storeAuthor,
    setStoreAuthor,
    updateAuthor,
    setUpdateAuthor,
    destroyAuthor,
    setDestroyAuthor,
  }
}

export default useAuthor
