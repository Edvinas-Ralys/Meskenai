import { createContext, useReducer, useState } from "react"
import authorsReducer from "../Reducers/authorsReducer"
import useAuthor from "../Hooks/useAuthor"

export const Authors = createContext()

export const AuthorsProvider = ({ children }) => {
  const [authors, dispatchAuthors] = useReducer(authorsReducer, [])
  const [deleteAuthor, setDeleteAuthor] = useState(null)

  const [editAuthor, setEditAuthor] = useState(null)
  const [oldEditAuthor, setOldEditAuthor] = useState(null)

  const {
    storeAuthor,
    setStoreAuthor,
    updateAuthor,
    setUpdateAuthor,
    destroyAuthor,
    setDestroyAuthor,
  } = useAuthor(dispatchAuthors)

  return (
    <Authors.Provider
      value={{
        authors,
        dispatchAuthors,
        storeAuthor,
        setStoreAuthor,
        updateAuthor,
        setUpdateAuthor,
        destroyAuthor,
        setDestroyAuthor,
        deleteAuthor,
        setDeleteAuthor,
        editAuthor,
        setEditAuthor,
        oldEditAuthor,
        setOldEditAuthor,
      }}
    >
      {children}
    </Authors.Provider>
  )
}
