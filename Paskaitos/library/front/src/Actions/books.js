import * as constants from "../Components/Constants/books.js"

export function getBooks(books) {
  return {
    type: constants.GET_BOOKS_FROM_SERVER,
    payload: books,
  }
}

export function storeBookAsTemp(books) {
  return {
    type: constants.CREATE_BOOK,
    payload: books,
  }
}

export function storeBookAsReal(response) {
  return {
    type: constants.CREATE_BOOK_REAL,
    payload: response,
  }
}

export function storeBookUndo(book) {
  return {
    type: constants.CREATE_BOOK_UNDO,
    payload: book,
  }
}

export function deleteBookAsTemp(book) {
  return {
    type: constants.DELETE_BOOK,
    payload: book,
  }
}

export function deleteBookUndo(book) {
  return {
    type: constants.DELETE_BOOK_UNDO,
    payload: book,
  }
}

export function deleteBookAsReal(response) {
  return {
    type: constants.DELETE_BOOK_REAL,
    payload: response,
  }
}

export function updateBookTemp(book) {
  console.log(book)
  return {
    type: constants.UPDATE_BOOK,
    payload: book,
  }
}

export function updateBookReal(response) {
  return {
    type: constants.UPDATE_BOOK_REAL,
    payload: response,
  }
}

export function updateBookUndo(book) {
  return {
    type: constants.UPDATE_BOOK_UNDO,
    payload: book,
  }
}
