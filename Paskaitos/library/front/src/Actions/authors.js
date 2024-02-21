import * as constants from "../Components/Constants/authors.js"

export function getAuthors(authors) {
  return {
    type: constants.GET_AUTHORS_FROM_SERVER,
    payload: authors,
  }
}

export function storeAuthorAsTemp(authors) {
  return {
    type: constants.CREATE_AUTHOR,
    payload: authors,
  }
}

export function storeAuthorAsReal(response) {
  return {
    type: constants.CREATE_AUTHOR_REAL,
    payload: response,
  }
}

export function storeAuthorUndo(author) {
  return {
    type: constants.CREATE_AUTHOR_UNDO,
    payload: author,
  }
}

export function deleteAuthorAsTemp(author) {
  return {
    type: constants.DELETE_AUTHOR,
    payload: author,
  }
}

export function deleteAuthorUndo(author) {
  return {
    type: constants.DELETE_AUTHOR_UNDO,
    payload: author,
  }
}

export function deleteAuthorAsReal(response) {
  return {
    type: constants.DELETE_AUTHOR_REAL,
    payload: response,
  }
}

export function updateAuthorTemp(author) {
  console.log(author)
  return {
    type: constants.UPDATE_AUTHOR,
    payload: author,
  }
}

export function updateAuthorReal(response) {
  return {
    type: constants.UPDATE_AUTHOR_REAL,
    payload: response,
  }
}

export function updateAuthorUndo(author) {
  return {
    type: constants.UPDATE_AUTHOR_UNDO,
    payload: author,
  }
}
