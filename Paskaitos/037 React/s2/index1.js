const express = require("express");
const cors = require(`cors`);
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
// ! bodyParser nuskaito form issiustus duomenis. Juos galima paimit  req.body
const fs = require("node:fs");
// ! fs bibilioteka gali skaityt failus
const app = express();
const port = 3001;

app.use(cors());
app.use(express.static(`public`));
app.use(bodyParser.json());

// router begin

app.get("/animals", (req, res) => {
  //Nuskaito faila ir pavercia masyvu
  const data = JSON.parse(fs.readFileSync(`./data/data.json`, `utf8`))
  //Nusiuncia i serveri
  res.send(data)
});


// * Objekto pridejimas
app.post(`/animals`, (req, res) =>{
  //Nuskaito faila ir pavercia masyvu
  const data = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'))
  //Sukuriam nauja objekta
  const newAnimal = req.body
  //Pridedam id prie naujo objekto
  newAnimal.id = uuidv4()
  //Objekta pridedam i objektu masyva
  data.push(newAnimal)
  //Masyvas su naujais duomenim irasomas i serveri
  //! writeFileSync
  fs.writeFileSync('./data/data.json', JSON.stringify(data))
  //Grazina nuajo objekto id
  res.json({id:newAnimal.id, message:`Animal created`, type:`info`})
})

// * Objekto naikinimas
// Delete neturi body, tod4l perduodama per params
app.delete('/animals/:id', (req, res) =>{
  let data = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'))
  // ID paimamas per paramsus
  const destroyAnimal = req.params.id
  data = data.filter(animal => animal.id !== destroyAnimal)
  fs.writeFileSync('./data/data.json', JSON.stringify(data))
  res.json({message:`Animal is free`, type: `info`})
})


// Upadte
app.put('/animals/:id', (req, res) =>{
  let data = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'))
  const id = req.params.id
  const updateAnimal = req.body
  data = data.map(animal => animal.id === id ? {...updateAnimal, id} : animal)
  fs.writeFileSync('./data/data.json', JSON.stringify(data))
  res.json({message:`Animal updated`, type: `info`})
})


// router end

app.listen(port, () => {
  console.log(`Animals klauso ${port} porto.`);
});
