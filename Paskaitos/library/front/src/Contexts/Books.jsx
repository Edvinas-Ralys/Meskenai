import { createContext, useReducer, useState } from "react"
import booksReducer from "../Reducers/booksReducer"
import useBooks from "../Hooks/useBooks"

export const Books = createContext()

export const BooksProvider = ({ children }) => {
  const [books, dispatchBooks] = useReducer(booksReducer, [])
  const [deleteBook, setDeleteBook] = useState(null)

  const [editBook, setEditBook] = useState(null)
  const [oldEditBook, setOldEditBook] = useState(null)

  const {
    storeBook,
    setStoreBook,
    updateBook,
    setUpdateBook,
    destroyBook,
    setDestroyBook,
  } = useBooks(dispatchBooks)

  return (
    <Books.Provider
      value={{
        books,
        dispatchBooks,
        storeBook,
        setStoreBook,
        updateBook,
        setUpdateBook,
        destroyBook,
        setDestroyBook,
        deleteBook,
        setDeleteBook,
        editBook,
        setEditBook,
        oldEditBook,
        setOldEditBook,
      }}
    >
      {children}
    </Books.Provider>
  )
}
