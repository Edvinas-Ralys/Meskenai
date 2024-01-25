import { useContext, useEffect, useState } from "react"
import { BooksData } from "./BooksData"

function Top() {
  const sorts = [
    { id: `def`, title: `Naujausios` },
    { id: `price_asc`, title: `Pigiausi virsuje` },
    { id: `price_desc`, title: `Brangiausia virsuje` },
    { id: `title_asc`, title: `A-Z` },
    { id: `title_desc`, title: `Z-A` },
  ]

  const [minMax, setMinMax] = useState({ min: 0, max: 0 })
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)

  const {
    setSort,
    sort,
    types,
    filterCat,
    setFilterCat,
    books,
    filterMin,
    setFilterMin,
    filterMax,
    setFilterMax,
  } = useContext(BooksData)

  useEffect(
    _ => {
      if (null === books) {
        return
      }
      const minMax = books.reduce(
        (acc, book) => {
          if (book.price < acc.min) {
            acc.min = book.price
          }
          if (book.price > acc.min) {
            acc.max = book.price
          }
          return acc
        },
        { min: books[0].price, max: books[0].price }
      )
      setMax(Math.ceil(minMax.max))
      setMin(Math.floor(minMax.min))
    },
    [books, setMin, setMax]
  )

  useEffect(
    _ => {
      setFilterMin(Math.floor(minMax.min))
      setFilterMax(Math.ceil(minMax.max))
    },
    [setFilterMax, setFilterMin]
  )

  return (
    <div className="top">
      <div className="block">
        <h2>Rusiuokle</h2>
        <select value={sort} onChange={e => setSort(e.target.value)}>
          {sorts.map((item, i) => (
            <option key={i} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
      {types && (
        <div className="block">
          <h2>Kategorijos</h2>
          <select value={filterCat} onChange={e => setFilterCat(e.target.value)}>
            <option value="all">Visos</option>
            {types.map((item, i) => (
              <option key={i} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
      )}
      {books && (
        <div className="block">
          <h2>Kainų filtras</h2>
          <div className="prices">
            <label htmlFor="">
              Nuo:
              <div>
                <span>{min}</span>
                <span>{filterMin}</span>
                <span>{max}</span>
              </div>
            </label>

            <input
              type="range"
              min={min}
              max={max}
              value={filterMin}
              onChange={e => setFilterMin(+e.target.value)}
            />
          </div>
          <div className="prices">
            <label htmlFor="">
              Iki
              <div>
                <span>{min}</span>
                <span>{filterMax}</span>
                <span>{max}</span>
              </div>
            </label>

            <input
              type="range"
              min={min}
              max={max}
              value={filterMax}
              onChange={e => setFilterMax(+e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Top
