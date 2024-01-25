const express = require("express");
const bodyParser = require("body-parser");
// ! bodyParser nuskaito form issiustus duomenis. Juos galima paimit  req.body
const fs = require("node:fs");
// ! fs bibilioteka gali skaityt failus
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));

// * Leidzia naudoti statinius failis is Public folderio
app.use(express.static(`public`));

// parse application/json
app.use(bodyParser.json());

// router begin

app.get("/", (req, res) => {
  console.log("Buvo užklausta i /");
  res.send("Labas Bebrai! <h1>Pirmas puslapis</h1>");
});

//req - atsiunciamas is narsykles
//res - is serverio isciunciamas

app.get("/m", (req, res) => {
  console.log("Buvo užklausta i /m");
  res.send("Uzklausa i /m puslapi <h1>Antras puslapis</h1>");
});

// 1.Properties by queries
app.get(`/trecias/rudas`, (req, res) => {
  console.log(`Query: `, req.query);
  console.log(`Query-color: `, req.query.color);
  console.log(`Query-size: `, req.query.size);
  res.send(`Trecias puslapis
  <h1 style="color:${req.query.color}; font-size:${req.query.size}px">Test text. Styling got by query</h1>`);
});

// 2.Properties in URL. Params are dynamic - :color
app.get(`/ketvirtas/:color`, (req, res) => {
  console.log(`Color params: `, req.params.color);
  res.send(
    `Ketvirtas. <h1 style="color:${req.params.color}; font-size:${req.query.size}">Ketvirtas puslapis</h1>`
  );
});

// 3. Duomenys siunciami su body
app.get(`/form`, (req, res) => {
  //Nuskaito faila
  const html = fs.readFileSync(`./htmls/form.html`, `utf8`);
  //Issiuncia faila
  res.send(html);
});

// ! Naudojant html <form>
// Paspaudus submit reikia post metodo kad duomenys butu issiusti
//Payload rodo kokie duomenys yra isiusti
app.post(`/form`, (req, res) => {
  console.log(req.body);

  //Nuskaitom duombazes faila
  let data = fs.readFileSync(`./data/data.json`, `utf8`);

  // Pavercia nuskaitomu masyvu
  data = JSON.parse(data);

  // Is body pushina duomenis i nuskaityta masyva
  data.push(req.body);

  // Stringify atgal i json
  data = JSON.stringify(data);

  //Duomenys irasomi (overwrite) i data.json
  fs.writeFileSync(`./data/data.json`, data);

  //Redirectina atgal i forma
  res.redirect(`/form`);
});
// ! Naudojant html <form>

// ! Naudojant JS
app.get(`/jsform`, (req, res) => {
  const html = fs.readFileSync(`./htmls/jsform.html`, `utf-8`)
  res.send(html);
});





// router end

app.listen(port, () => {
  console.log(`Bebras klauso ${port} porto.`);
});
