import { useEffect, useState } from "react"
import "./table.scss"
import "./App.scss"
import "./form.scss"
import "./buttons.scss"
import axios from "axios"

const API_URL = `http://localhost:3001/clients`

export default function App() {
  const [clients, setClients] = useState([])
  const [structured, setStructured] = useState([])
  const [type, setType] = useState(``)

  const restrcture = clients => {
    const structured = []
    clients.forEach(client => {
      const index = structured.findIndex(c => c.id === client.id)
      if (index === -1) {
        structured.push({
          id: client.id,
          name: client.name,
          phones: [
            {
              pid: client.pid,
              number: client.number,
              client_id: client.client_id,
            },
          ],
        })
      } else {
        structured[index].phones.push({
          pid: client.pid,
          number: client.number,
          client_id: client.client_id,
        })
      }
    })
    console.log(structured)
    return structured
  }

  useEffect(
    _ => {
      if (type === ``) {
        setClients([])
        setStructured([])
        return
      }
      axios.get(API_URL + `/?type=` + type).then(res => {
        setClients(res.data)
        setStructured(restrcture(res.data))
      })
    },
    [type, setClients]
  )

  return (
    <div className="inside">
      <h1>Clients</h1>
      <h2>by join type {type}</h2>
      <button className="green" onClick={_ => setType(`left`)}>
        Left
      </button>
      <button className="green" onClick={_ => setType(`inner`)}>
        Inner
      </button>
      <button className="green" onClick={_ => setType(`right`)}>
        Right
      </button>
      <table>
        <thead>
          <tr>
            <th>Client ID</th>
            <th>Name</th>
            <th>Phone ID</th>
            <th>Number</th>
            <th>Phone client_id</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id + `_` + client.pid}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.pid}</td>
              <td>{client.number}</td>
              <td>{client.client_id}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="forms">
        <button className="red" onClick={_ => setType(``)}>
          CLear
        </button>
      </div>
      <h2>Structured data</h2>
      <div className="structured">
        {structured.map(client => (
          <div className="client" key={client.id}>
            <h3>{client.name}</h3>
            <div className="phones">
              {client.phones.map(phone => (
                <div className="phone" key={phone.pid}>
                  {phone.number}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
