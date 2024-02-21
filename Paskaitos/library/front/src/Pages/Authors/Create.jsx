import { useContext, useState } from "react"
import { Authors } from "../../Contexts/Authors"

const defaultInputs = {
  name: ``,
  surname: ``,
  nickname: ``,
  born: ``,
}

function Create() {
  const { setStoreAuthor } = useContext(Authors)

  const [input, setInput] = useState(defaultInputs)

  const handleChange = e => {
    setInput(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const create = _ => {
    setStoreAuthor(input)
    //Reset inputs
    setInput(defaultInputs)
  }

  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>Add an Author</h3>
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
          <label htmlFor="surname" className="form-label">
            Surname
          </label>
          <input
            type="text"
            className="form-control"
            id="surname"
            value={input.surname}
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
            value={input.nickname}
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
            value={input.born}
            onChange={e => handleChange(e)}
          />
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
