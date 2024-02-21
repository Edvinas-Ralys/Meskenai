import { useContext, useState } from "react"
import { Heroes } from "../../Contexts/Heroes"
import useBooksDropdown from "../../Hooks/useBooksDropdown"

const defaultInputs = {
  name: ``,
  good: 1,
  book_id: ``,
}

function Create() {
  const { setStoreHero } = useContext(Heroes)

  const [input, setInput] = useState(defaultInputs)

  const { booksDropdown } = useBooksDropdown()

  const handleChange = e => {
    setInput(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const create = _ => {
    const author = {
      surname: booksDropdown.find(book => book.id === +input.book_id).surname,
      name: booksDropdown.find(book => book.id === +input.book_id).name,
    }
    const book = {
      title: booksDropdown.find(book => book.id === +input.book_id).title
    }
    setStoreHero({ ...input, author, book })
    setInput(defaultInputs)
  }

  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>Add a Hero</h3>
      </div>
      <div className="card-body">
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
      <div className="card-footer text-body-secondary">
        <button onClick={create} type="button" className="btn btn-primary m-2">
          Create
        </button>
      </div>
    </div>
  )
}

export default Create
