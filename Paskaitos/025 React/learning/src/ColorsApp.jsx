import "bootstrap/dist/css/bootstrap.min.css";
import "./components/027/buttons.scss";
import "./App.scss";
import "./form.scss";
import Create from "./components/colors/Create";
import { useCallback, useEffect, useState } from "react";
import { lsDestroy, lsRead, lsStore, lsUpdate } from "./components/colors/lsManager";
import Read from "./components/colors/Read";
import Delete from "./components/colors/Delete";
import Edit from "./components/colors/Edit";
import Messages from "./components/colors/Messages";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default function App() {
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [destroyData, setDestroyData] = useState(null)
  const [editData, setEditData] = useState(null)
  const [colors, setColors] = useState([]);
  const [updateData, setUpdateData] = useState(null)
  const [messages, setMessages] = useState([])
  const KEY = `colors`;

  const addMessage = useCallback((type, text) =>{
    const id = uuidv4();
    setMessages(prevMessages => [{id, type, text}, ...prevMessages])
    setTimeout(_=>{
      setMessages(prevMessages => prevMessages.filter(m => m.id !== id))
    }, 3000)
  }, [])

  useEffect(() => {
    setColors(lsRead(KEY));
  }, []);

  useEffect(
    (_) => {
      if (createData === null) {
        return;
      }
      const id = lsStore(KEY, createData);
      setColors((prevColors) => [...prevColors, { ...createData, id }]);
      addMessage(`dark`, `Color created!`)
      const color = createData.color.replace(`#`, ``)
      axios.get(`https://www.thecolorapi.com/id?hex=${color}`)
        .then(res=>{
          const name = res.data.name.value;
          const newData = {...createData, id, name}
          lsUpdate(KEY, id, newData)
          setColors(prevColors => prevColors.map(color => color.id === id ? newData : color))
          addMessage(`dark`, `Color name created fro API`)
        })
        .catch(_=>{
          console.log(`error with color name`)
        })
    },
    [createData, setColors, addMessage]
  );
  useEffect(_=>{
    if(null === destroyData){
      return
    }
    lsDestroy(KEY, destroyData.id)
    setColors(prevColors => prevColors.filter(color => color.id !== destroyData.id));
    setDeleteData(null)
    addMessage(`danger`, `Color has been deleted`)
  }, [destroyData, setColors, addMessage])


useEffect(_=>{
  if(null === updateData){
    return
  }
  lsUpdate(KEY, updateData.id, updateData)
  setColors(prevColors => prevColors.map(color => color.id === updateData.id ? {...updateData, id:updateData.id} : color))
  setEditData(null)
  addMessage(`danger`, `Color has been edited`)
}, [updateData, setColors, addMessage])

  return (
    <div className="App">
      <Delete deleteData={deleteData} setDeleteData={setDeleteData} setDestroyData={setDestroyData} />
      <Edit editData={editData} setEditData={setEditData} setUpdateData={setUpdateData}/>
      <Messages messages={messages}/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-5">
            <Create setCreateData={setCreateData} />
          </div>
          <div className="col-7">
            <Read colors={colors} setDeleteData={setDeleteData} setEditData={setEditData}  />
          </div>
        </div>
      </div>
    </div>
  );
}
