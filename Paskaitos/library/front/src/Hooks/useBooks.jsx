import { useEffect, useState } from "react"
import { SERVER_URL } from "../Components/Constants/main"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
import * as a from "../Actions/books"

function useBook(dispatchBooks) {
  const [storeBook, setStoreBook] = useState(null)
  const [updateBook, setUpdateBook] = useState(null)
  const [destroyBook, setDestroyBook] = useState(null)


  useEffect(
    _ => {
      axios
        .get(`${SERVER_URL}/books`)
        .then(res => {
          dispatchBooks(a.getBooks(res.data))
        })

        .catch(err => console.log(err))
    },
    [dispatchBooks]
  )

  useEffect(
    _ => {
      if (null !== storeBook) {
        const uuid = uuidv4()
        dispatchBooks(a.storeBookAsTemp({...storeBook, id: uuid}))
        const withoutBook = {...storeBook}
        delete withoutBook.book
        axios
          .post(`${SERVER_URL}/books`, {...storeBook, id: uuid})
          .then(res => {
            setStoreBook(null)
            dispatchBooks(a.storeBookAsReal(res.data))
          })
          .catch(err => {
            dispatchBooks(a.storeBookUndo({storeBook, id:uuid}))
            setStoreBook(null)
            console.log(err)
          })
      }
    },
    [storeBook, dispatchBooks]
  )


  useEffect(_=>{
    if(null !== destroyBook){
      dispatchBooks(a.deleteBookAsTemp(destroyBook))
      axios.delete(`${SERVER_URL}/books/${destroyBook.id}`)
        .then(res => {
          setDestroyBook(null)
          dispatchBooks(a.deleteBookAsReal(res.data))
        })
        .catch(err => {
          setDestroyBook(null)
          dispatchBooks(a.deleteBookUndo(destroyBook))
          console.log(err)
        })
    }
  }, [destroyBook, dispatchBooks])

  useEffect(_=>{
    if(null !== updateBook){
      dispatchBooks(a.updateBookTemp(updateBook))
      axios.put(`${SERVER_URL}/books/${updateBook.id}`, updateBook)
        .then(res => {
          dispatchBooks(a.updateBookReal(res.data))
          setUpdateBook(null)
        })
        .catch(err => {
          console.log(err)
          dispatchBooks(a.updateBookUndo(updateBook))
        })
    }
  }, [updateBook, dispatchBooks])


  return {
    storeBook,
    setStoreBook,
    updateBook,
    setUpdateBook,
    destroyBook,
    setDestroyBook,
  }
}

export default useBook
