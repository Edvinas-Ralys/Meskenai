import { useContext } from "react"
import { Heroes } from "../../Contexts/Heroes"

export default function Delete() {
  const { setDeleteHero, deleteHero, setDestroyHero } = useContext(Heroes)

  const destroy = _ => {
    setDestroyHero(deleteHero)
    setDeleteHero(null)
  }

  if (!deleteHero) return null

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm delete</h5>
            <button
              type="button"
              onClick={_ => setDeleteHero(null)}
              className="btn-close"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Are you sure to delete {deleteHero.name}?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={_ => setDeleteHero(null)}
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
