const express = require("express")
const cors = require(`cors`)
const bodyParser = require("body-parser")
const app = express()
const port = 3001

//* Prideda sql biblioteką
const mysql = require("mysql")
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "forest",
})

app.use(cors())
app.use(express.static(`public`))
app.use(bodyParser.json())

//* Prisijungia prie DB
connection.connect()

//Read
// SELECT column1, column2, ...
// FROM table_name;

app.get("/trees", (req, res) => {
  const sort = req.query.sort || ""
  let sql
  if (sort === "height_asc") {
    sql = `
        SELECT *
        FROM trees
        ORDER BY height ASC
    `
  } else if (sort === "height_desc") {
    sql = `
        SELECT *
        FROM trees
        ORDER BY height DESC
    `
  } else if (sort === "name_asc") {
    sql = `
        SELECT *
        FROM trees
        ORDER BY name ASC
    `
  } else if (sort === "name_desc") {
    sql = `
        SELECT *
        FROM trees
        ORDER BY name DESC
    `
  } else {
    sql = `
        SELECT *
        FROM trees
    `
  }

  // const sql = `
  //       SELECT id, name, height, type
  //       FROM trees
  //       -- WHERE type = 'lapuotis' OR height > 10
  //       -- ORDER BY type ASC, height DESC
  //       -- LIMIT 4, 4
  //   `;

  connection.query(sql, (err, rows) => {
    if (err) throw err
    res.json(rows)
  })
})

// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);

//Add
app.post(`/trees`, (req, res) => {
  const { name, height, type } = req.body
  const sql = `
  INSERT INTO trees (name, height, type)
  VALUES (?, ?, ?)`
  connection.query(sql, [name, height, type], (err, result) => {
    if (err) throw err
    res.json({ id: result.insertId })
  })
})

// DELETE FROM table_name WHERE condition;

//Delete
app.delete(`/trees/:id`, (req, res) => {
  const sql = `
DELETE FROM trees
WHERE id = ?`
  connection.query(sql, [req.params.id], (err, result) => {
    if (err) throw err
    res.json({ status: `ok` })
  })
})

//Update
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
app.put(`/trees/:id`, (req, res) => {
  const sql = `
  UPDATE trees
  SET height = ?
  WHERE id = ?`
  const { height } = req.body
  connection.query(sql, [height, req.params.id], (err, result) => {
    if (err) throw err
    res.json({ message: `ok` })
  })
})

app.get(`/trees/stats`, (req, res) => {
  const sql = `
  SELECT COUNT(*) AS total, AVG(height) as average
  FROM trees`
  connection.query(sql, (err, rows) => {
    if (err) throw err
    res.json(rows[0])
  })
})

//Join

//INNER
// SELECT column_name(s)
// FROM table1
// INNER JOIN table2
// ON table1.column_name = table2.column_name;



app.get("/clients", (req, res) => {
  const type = req.query.type || ""
  let sql
  if(type === `inner`){
    sql = `SELECT c.id, p.id AS pid, name, number, client_id
    FROM clients AS c
    INNER JOIN phones AS p
    ON c.id = p.client_id`
  } else if (type === `left`) {
    sql = `SELECT c.id, p.id AS pid, name, number, client_id
    FROM clients AS c
    LEFT JOIN phones AS p
    ON c.id = p.client_id`
  } else if( type === `right`){
    sql = `SELECT c.id, p.id AS pid, name, number, client_id
    FROM clients AS c
    RIGHT JOIN phones AS p
    ON c.id = p.client_id`
  }

  connection.query(sql, (err, rows) => {
    if(err) throw err;
    res.json(rows)
  })
})

app.listen(port, () => {
  console.log(`Forest and Maria listens for port: ${port}`)
})
