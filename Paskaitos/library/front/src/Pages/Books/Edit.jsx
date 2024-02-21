import { useContext, useState } from "react"
import { Books } from "../../Contexts/Books"
import useAuthorsDropdown from "../../Hooks/useAuthorsDropdown"



function Edit() {
    const { authorsDropdown } = useAuthorsDropdown()
  const { editBook, setEditBook, setUpdateBook, setOldEditBook, oldEditBook } = useContext(Books)
  const [input, setInput] = useState(editBook)

  const handleChange = e => {
    setInput(prev => ({ ...prev, [e.target.id]: e.target.value }));
}

  const submit = _ => {
    const author = {
        surname: authorsDropdown.find(author => author.id === +input.author_id).surname,
        name: authorsDropdown.find(author => author.id === +input.author_id).name
    }
    setUpdateBook({ ...input, old: oldEditBook, author })
    setOldEditBook(null)
    setEditBook(null)
  }

  const handleModal = _ => {
    setOldEditBook(null)
    setEditBook(null)
  }

  if (!editBook) return null

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm edit</h5>
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
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={input.title}
                onChange={e => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="surnameEdit" className="form-label">
                Genre
              </label>
              <input
                type="text"
                className="form-control"
                id="genre"
                value={input.genre}
                onChange={e => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nickname" className="form-label">
                Pages
              </label>
              <input
                type="text"
                className="form-control"
                id="pages"
                value={input.pages}
                onChange={e => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              {authorsDropdown && (
                <div className="mb-3">
                  <label htmlFor="author_id">Author</label>
                  <select name="" id="author_id" value={input.author_id} onChange={handleChange}>
                    <option value="">Select author</option>
                    {authorsDropdown.map(author => (
                      <option key={author.id} value={author.id}>
                        {author.name} {author.surname}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>{" "}
          </div>
          <div className="modal-footer">
            <button type="button" onClick={_ => setEditBook(null)} className="btn btn-secondary">
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
