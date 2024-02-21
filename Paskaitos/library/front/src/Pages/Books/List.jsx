import { useContext, useEffect } from "react"
import { Books } from "../../Contexts/Books"

function List() {
  const { books, setDeleteBook, setEditBook, setOldEditBook, oldEditBook } = useContext(Books)


  const handleEditBook = a => {
    const bookToEdit = books.find(auth => auth.id === a.id)
    setEditBook(bookToEdit)
    setOldEditBook(bookToEdit)
  }

  return (
    <>
      {null !== books &&
        books.map((book, index) => (
          <div key={index}>
            {book.deleted ? (
              <div className="alert alert-danger">{book.title} was deleted</div>
            ) : (
              <div className="card mt-2" style={{ opacity: book.temp ? 0.5 : 1 }}>
                <div className="card-header">
                  <h4>{book.title}</h4>
                </div>
                <div className="card-body">
                  <p>Genre: {book.genre}</p>
                  <p>Pages: {book.pages}</p>
                  <p>Author: {book.author.name} {book.author.surname}</p>
                </div>
                <div className="card-footer">
                  <button
                    type="button"
                    disabled={book.temp}
                    onClick={_ => setDeleteBook(book)}
                    className="btn btn-danger m-2"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    onClick={_ => handleEditBook(book)}
                    disabled={book.temp}
                    className="btn btn-warning m-2"
                  >
                    Edit
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
    </>
  )
}

export default List
