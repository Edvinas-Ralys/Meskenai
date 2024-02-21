import { useContext, useEffect } from "react"
import { Authors } from "../../Contexts/Authors"

function List() {
  const { authors, setDeleteAuthor, setEditAuthor, setOldEditAuthor, oldEditAuthor } = useContext(Authors)

const handleEditAuthor = a =>{
  const authorToEdit = authors.find(auth => auth.id === a.id)
  setEditAuthor(authorToEdit )
  setOldEditAuthor(authorToEdit)
}


  return (
    <>
      {null !== authors &&
        authors.map((author, index) => (
          <div key={author.id}>
            {author.deleted ? (
              <div className="alert alert-danger">
                {author.name} {author.surname} was deleted
              </div>
            ) : (
              <div className="card mt-2" style={{ opacity: author.temp ? 0.5 : 1 }}>
                <div className="card-header">
                  <h4>
                    {author.name} {author.surname}
                  </h4>
                </div>
                <div className="card-body">
                  <p>Nickname: {author.nickname}</p>
                  <p>
                    {author.born !== null &&
                      `Born: ${new Intl.DateTimeFormat(`lt-LT`).format(new Date(author.born))}`}
                  </p>
                </div>
                <div className="card-footer">
                  <button
                    type="button"
                    disabled={author.temp}
                    onClick={_ => setDeleteAuthor(author)}
                    className="btn btn-danger m-2"
                  >
                    Delete
                  </button>
                  <button type="button" onClick={_=>handleEditAuthor(author)} disabled={author.temp} className="btn btn-warning m-2">
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
