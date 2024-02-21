import { useContext, useState } from "react"
import { Heroes } from "../../Contexts/Heroes"
import useAuthorsDropdown from "../../Hooks/useAuthorsDropdown"
import useBooksDropdown from "../../Hooks/useBooksDropdown"



function Edit() {
    const { authorsDropdown } = useAuthorsDropdown()
  const { editHero, setEditHero, setUpdateHero, setOldEditHero, oldEditHero } = useContext(Heroes)
  const [input, setInput] = useState(editHero)

  const handleChange = e => {
    setInput(prev => ({ ...prev, [e.target.id]: e.target.value }));
}

const { booksDropdown } = useBooksDropdown()

  const submit = _ => {
    const author = {
        surname: booksDropdown.find(book => book.id === +input.book_id).surname,
        name: booksDropdown.find(book => book.id === +input.book_id).name
    }
    setUpdateHero({ ...input, old: oldEditHero, author })
    setOldEditHero(null)
    setEditHero(null)
  }

  const handleModal = _ => {
    setOldEditHero(null)
    setEditHero(null)
  }

  if (!editHero) return null

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
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={input.name}
            onChange={e => handleChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="good" className="form-label">
            Good / Bad?
          </label>
          <h5
            style={{  userSelect:`none`, cursor: "pointer", display: input.good ? "block" : "none" }}
            onClick={_ => handleChange({ target: { value: 0, id: "good" } })}
          >
            Good
          </h5>
          <h5
            style={{ userSelect:`none`, cursor: "pointer", display: input.good ? "none" : "block" }}
            onClick={_ => handleChange({ target: { value: 1, id: "good" } })}
          >
            Bad
          </h5>
        </div>
        <div className="mb-3">
        {booksDropdown && (
          <div className="mb-3">
            <label htmlFor="book_id">Book</label>
            <select name="" id="book_id" value={input.book_id} onChange={handleChange}>
              <option value="">Select book</option>
              {booksDropdown.map(book => (
                <option key={book.id} value={book.id}>
                  {book.title}
                </option>
              ))}
            </select>
          </div>
        )}

        </div>
          </div>
          <div className="modal-footer">
            <button type="button" onClick={_ => setEditHero(null)} className="btn btn-secondary">
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
