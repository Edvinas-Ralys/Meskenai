import { useContext } from "react"
import { Authors } from "../../Contexts/Authors"

export default function Delete() {
  const { setDeleteAuthor, deleteAuthor, setDestroyAuthor } = useContext(Authors)

  const destroy = _ => {
    setDestroyAuthor(deleteAuthor)
    setDeleteAuthor(null)
  }

  if (!deleteAuthor) return null

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm delete</h5>
            <button
              type="button"
              onClick={_ => setDeleteAuthor(null)}
              className="btn-close"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Are you sure to delete {deleteAuthor.name} {deleteAuthor.surname}?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={_ => setDeleteAuthor(null)}
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
