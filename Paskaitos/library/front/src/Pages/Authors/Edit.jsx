import { useState, useContext, useEffect } from "react"
import { Authors } from "../../Contexts/Authors"

function Edit() {
  const { editAuthor, setEditAuthor, setUpdateAuthor, setOldEditAuthor, oldEditAuthor } = useContext(Authors)

  const handleChange = e => {
    setEditAuthor(author => ({ ...author, [e.target.id]: e.target.value }))
  }

  const submit = _ => {
    setUpdateAuthor({...editAuthor, old:oldEditAuthor})
    setOldEditAuthor(null)
    setEditAuthor(null)
  }

  const handleModal = _ =>{
    setOldEditAuthor(null)
    setEditAuthor(null)
  }


  if (!editAuthor) return null

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm delete</h5>
            <button
              type="button"
              onClick={handleModal}
              className="btn-close"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={editAuthor.name}
                onChange={e => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="surnameEdit" className="form-label">
                Surname
              </label>
              <input
                type="text"
                className="form-control"
                id="surname"
                value={editAuthor.surname}
                onChange={e => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nickname" className="form-label">
                Nickname
              </label>
              <input
                type="text"
                className="form-control"
                id="nickname"
                value={editAuthor.nickname}
                onChange={e => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="born" className="form-label">
                Date of birth
              </label>
              <input
                type="date"
                className="form-control"
                id="born"
                value={editAuthor.born.split(`T`)[0]}
                onChange={e => handleChange(e)}
              />
            </div>{" "}
          </div>
          <div className="modal-footer">
            <button type="button" onClick={_ => setEditAuthor(null)} className="btn btn-secondary">
              Close
            </button>
            <button type="button" onClick={submit} className="btn btn-success">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit
