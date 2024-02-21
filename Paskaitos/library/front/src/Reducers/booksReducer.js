import * as constants from "../Components/Constants/books"
export default function booksReducer(state, action) {
  let newState = structuredClone(state ? state : [])
  let book = null
  switch (action.type) {
    case constants.GET_BOOKS_FROM_SERVER:
      newState = action.payload.map(book => {
        book.author = {}
        book.author.name = book.name
        book.author.surname = book.surname
        delete book.name
        delete book.surname
        return book
      })
      break

    case constants.CREATE_BOOK:
      newState.unshift({ ...action.payload, temp: true })
      break

    case constants.CREATE_BOOK_REAL:
      book = newState.find(book => book.id === action.payload.uuid)
      if (book) {
        delete book.temp
        book.id = action.payload.id
      }
      break

    case constants.CREATE_BOOK_UNDO:
      newState = newState.filter(b => b.id !== action.payload.id)
      break

    case constants.DELETE_BOOK:
      book = newState.find(book => book.id === action.payload.id)
      if (book) {
        book.deleted = true
      }
      break

    case constants.DELETE_BOOK_UNDO:
      book = newState.find(book => book.id === action.payload.id)
      if (book) {
        delete book.deleted
      }
      break
    case constants.DELETE_BOOK_REAL:
      newState = newState.filter(book => book.id !== action.payload.id)
      break

    case constants.UPDATE_BOOK:
      book = newState.find(b => b.id === action.payload.id)
      if (book) {
        book = { ...action.payload, temp: true }
      }
      newState = newState.map(b => (b.id === book.id ? book : b))
      break

    case constants.UPDATE_BOOK_REAL:
      book = newState.find(b => b.id === action.payload.id)
      if (book) {
        delete book.temp
        delete book.old
      }
      newState = newState.map(b => (b.id === book.id ? book : b))
      break

    case constants.UPDATE_BOOK_UNDO:
      book = newState.find(b => b.id === action.payload.id)
      if (book) {
        book = { ...book.old }
      }
      newState = newState.map(b => (b.id === book.id ? book : b))
      break
    default:
  }
  console.log(newState)
  return newState
}
