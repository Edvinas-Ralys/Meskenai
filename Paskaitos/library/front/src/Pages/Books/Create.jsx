import { useContext, useState } from "react"
import { Books } from "../../Contexts/Books"
import useAuthorsDropdown from "../../Hooks/useAuthorsDropdown"

const defaultInputs = {
  title: ``,
  pages: ``,
  genre: ``,
  author_id: ``,
}

function Create() {
  const { setStoreBook } = useContext(Books)

  const [input, setInput] = useState(defaultInputs)

  const { authorsDropdown } = useAuthorsDropdown()

  const handleChange = e => {
    setInput(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const create = _ => {
    const author = {
      surname: authorsDropdown.find(author => author.id === +input.author_id).surname,
      name: authorsDropdown.find(author => author.id === +input.author_id).name
  }
  console.log(author)
    setStoreBook({...input, author})
    setInput(defaultInputs)
  }

  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>Add a Book</h3>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
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
          <label htmlFor="pages" className="form-label">
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
          <label htmlFor="genre" className="form-label">
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
