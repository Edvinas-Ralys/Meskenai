import { useContext, useEffect } from "react"
import { Heroes } from "../../Contexts/Heroes"

function List() {
  const { heroes, setDeleteHero, setEditHero, setOldEditHero, oldEditHero } = useContext(Heroes)


  const handleEditHero = a => {
    const heroToEdit = heroes.find(auth => auth.id === a.id)
    setEditHero(heroToEdit)
    setOldEditHero(heroToEdit)
  }

  return (
    <>
      {null !== heroes &&
        heroes.map((hero, index) => (
          <div key={index}>
            {hero.deleted ? (
              <div className="alert alert-danger">{hero.title} was deleted</div>
            ) : (
              <div className="card mt-2" style={{ opacity: hero.temp ? 0.5 : 1 }}>
                <div className="card-header">
                  <h4>{hero.name}</h4>
                </div>
                <div className="card-body">
                  <p>Book: {hero.book.title}</p>
                  <p>Author: {hero.author.name} {hero.author.surname}</p>
                  <p>Faction: {hero.good ? `Good` : `Evil`}</p>
                </div>
                <div className="card-footer">
                  <button
                    type="button"
                    disabled={hero.temp}
                    onClick={_ => setDeleteHero(hero)}
                    className="btn btn-danger m-2"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    onClick={_ => handleEditHero(hero)}
                    disabled={hero.temp}
                    className="btn btn-warning m-2"
                  >
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
