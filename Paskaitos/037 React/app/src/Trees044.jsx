import { useEffect, useState } from "react"
import "./table.scss"
import "./App.scss"
import "./form.scss"
import "./buttons.scss"
import axios from "axios"

const API_URL = `http://localhost:3001/trees`

export default function App() {
  const types = [`lapuotis`, `spygliuotis`, `palmė`]
  const [inputs, setInputs] = useState({ name: ``, height: ``, type: `` })
  const [trees, setTrees] = useState([])
  const [cutId, setCutId] = useState(``)
  const [growInputs, setGrowInputs] = useState({ id: ``, height: `` })
  const [sort, setSort] = useState('default');
  const [stats, setStats] = useState({total: 0, average: 0});
  const sorts = [
    { name: 'default', value: 'default' },
    { name: 'height_asc', value: 'height 1-9' },
    { name: 'height_desc', value: 'height 9-1' },
    { name: 'name_asc', value: 'name A-Z' },
    { name: 'name_desc', value: 'name Z-A' },
]

  const handleInputs = e => {
    setInputs({ ...inputs, [e.target.id]: e.target.value })
  }

  const handleGrowInputChange = e => {
    setGrowInputs({ ...growInputs, [e.target.id]: e.target.value });
}

  const plant = _ => {
    axios.post(API_URL, { ...inputs, height: +inputs.height }).then(res => {
      setTrees([...trees, { ...inputs, id: res.data.id }])
      setInputs({ name: ``, height: ``, type: `` })
    })
  }

  const cut = _ => {
    axios.delete(`${API_URL}/${cutId}`)
    .then(_ => {
      setTrees(trees => trees.filter(tree => tree.id !== +cutId))
      setCutId(``)
    })
  }

  const grow = _ => {
    axios.put(`${API_URL}/${growInputs.id}`, { height: +growInputs.height }).then(_ => {
      setTrees(
        trees.map(tree =>
          tree.id === +growInputs.id ? { ...tree, height: +growInputs.height } : tree
        )
      )
      setGrowInputs({ id: ``, height: `` })
    })
  }

  useEffect(_=>{
    axios.get(API_URL + `/stats`)
      .then(res=> {
        setStats(res.data)
        console.log(res.data)
      })
  }, [trees])

  // Loads DB on refresh
  useEffect(_ => {
    axios
      .get(`${API_URL}/?sort=${sort}`)
        .then(res => setTrees(res.data))
        .catch(err => console.log(err))
  }, [sort])

  return (
    <div className="inside">
      <h1>Trees</h1>
      <h2>Trees in garden: {stats.total}, average height:{stats.average.toFixed(1)}m</h2>
            <div className="sort-box">
            {
                    sorts.map(s => <label
                        key={s.name}
                        style={{
                            color: sort === s.name ? 'white' : 'skyblue',
                            backgroundColor: sort === s.name ? 'skyblue' : 'white',
                            cursor: sort === s.name ? 'default' : 'pointer'
                        }}
                        onClick={_ => setSort(s.name)}
                    >{s.value}</label>)
                }
            </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Height</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {trees.map(tree => (
            <tr key={tree.id}>
              <td>{tree.id}</td>
              <td>{tree.name}</td>
              <td>{tree.height}</td>
              <td>{tree.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="forms">
        <div className="form">
          <h2>Plant a Tree</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={inputs.name}
              placeholder="Pavadinimas"
              onChange={handleInputs}
            />
            <label htmlFor="height">Height</label>
            <input
              type="text"
              id="height"
              value={inputs.height}
              placeholder="Aukštis"
              onChange={handleInputs}
            />
            <label htmlFor="type">Type</label>
            <select name="type" id="type" value={inputs.type} onChange={handleInputs}>
              <option key={0} value="0">
                Pasirinkti
              </option>
              {types.map((type, i) => (
                <option key={i} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <button onClick={plant} type="button" className="green">
              Plant tree
            </button>
          </form>
        </div>
        <div className="form">
          <h2>Cut tree</h2>
          <form>
            <label htmlFor="id">ID</label>
            <input type="text" id="id" value={cutId} onChange={e => setCutId(e.target.value)} />
            <button type="button" onClick={cut} className="green">
              Cut tree
            </button>
          </form>
        </div>
        <div className="form">
          <h2>Grow tree</h2>
          <form>
            <label htmlFor="id">ID</label>
            <input
              type="text"
              id="id"
              placeholder="ID"
              value={growInputs.id}
              onChange={handleGrowInputChange}
            />
            <label htmlFor="height">Height</label>
            <input
              type="text"
              id="height"
              placeholder="Aukštis"
              value={growInputs.height}
              onChange={handleGrowInputChange}
            />
            <button type="button" className="green" onClick={grow}>
              Grow Tree
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
