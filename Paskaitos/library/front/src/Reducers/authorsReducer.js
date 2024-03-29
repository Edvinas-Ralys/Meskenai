import * as constants from "../Components/Constants/authors"
export default function authorsReducer(state, action) {
  let newState = structuredClone(state ? state : [])
  let author = null
  switch (action.type) {
    case constants.GET_AUTHORS_FROM_SERVER:
      newState = action.payload
      break

    case constants.CREATE_AUTHOR:
      newState.unshift({ ...action.payload, temp: true })
      break

    case constants.CREATE_AUTHOR_REAL:
      author = newState.find(author => author.id === action.payload.uuid)
      if (author) {
        delete author.temp
        author.id = action.payload.id
      }
      break

    case constants.CREATE_AUTHOR_UNDO:
      newState = newState.filter(auth => auth.id !== action.payload.id)
      break

    case constants.DELETE_AUTHOR:
      author = newState.find(author => author.id === action.payload.id)
      if (author) {
        author.deleted = true
      }
      break

    case constants.DELETE_AUTHOR_UNDO:
      author = newState.find(author => author.id === action.payload.id)
      if (author) {
        delete author.deleted
      }
      break
    case constants.DELETE_AUTHOR_REAL:
      newState = newState.filter(author => author.id !== action.payload.id)
      break

    case constants.UPDATE_AUTHOR:
      author = newState.find(auth => auth.id === action.payload.id)
      if (author) {
        author = { ...action.payload, temp: true }
      }
      newState = newState.map(auth => (auth.id === author.id ? author : auth))
      break

    case constants.UPDATE_AUTHOR_REAL:
      author = newState.find(auth => auth.id === action.payload.id)
      if (author) {
        delete author.temp
        delete author.old
      }
      newState = newState.map(auth => (auth.id === author.id ? author : auth))
      break

    case constants.UPDATE_AUTHOR_UNDO:
      author = newState.find(auth => auth.id === action.payload.id)
      if (author) {
        author = { ...author.old }
      }
      newState = newState.map(auth => (auth.id === author.id ? author : auth))
      break
    default:
  }
  console.log(newState)
  return newState
}
