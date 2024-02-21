import { useContext } from "react"
import { Books } from "../../Contexts/Books"

export default function Delete() {
  const { setDeleteBook, deleteBook, setDestroyBook } = useContext(Books)

  const destroy = _ => {
    setDestroyBook(deleteBook)
    setDeleteBook(null)
  }

  if (!deleteBook) return null

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm delete</h5>
            <button
              type="button"
              onClick={_ => setDeleteBook(null)}
              className="btn-close"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Are you sure to delete {deleteBook.title}?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={_ => setDeleteBook(null)}
              className="btn btn-secondary"
            >
              Close
            </button>
            <button type="button" onClick={destroy} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
