import { useContext } from "react"
import { BooksData } from "./BooksData"
import Book from "./Book"

function BooksList() {
  const { books } = useContext(BooksData)


  return (
    <div className="books">
      {books !== null &&
        books.length &&
        books.map(book => (book.show.size === 0 ? <Book key={book.id} book={book} /> : null))}
      {books !== null && books.length === 0 && <div className="books_empty">No books found</div>}
      {books !== null &&
        0 === books.reduce((acc, book) => acc + (book.show.size === 0 ? 1 : 0), 0) && (
          <div className="books_empty">Filtered books not found</div>
        )}
      {books === null && <div className="books_empty">Books loading</div>}
    </div>
  )
}

export default BooksList
