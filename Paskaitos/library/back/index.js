const express = require("express")
const cors = require("cors")
const { v4: uuidv4 } = require("uuid")
const bodyParser = require("body-parser")
const mysql = require("mysql")
const md5 = require("md5")
const fs = require("fs")
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "library",
})

const app = express()
const port = 3001

app.use(cors())
app.use(express.json({ limit: "10mb" }))
app.use(express.static("public"))

app.use(bodyParser.json())

connection.connect()

// router

app.get("/", (req, res) => {
  console.log("Buvo užklausta /")
  res.send("Labas, SERVERI")
})

app.get("/authors", (req, res) => {
  const sql = "SELECT * FROM authors"
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500)
    } else {
      res.json(results)
    }
  })
})

app.post("/authors", (req, res) => {
  const sql = `INSERT INTO authors (name, surname, nickname, born) VALUE (?, ?, ?, ?)`
  connection.query(
    sql,
    [req.body.name, req.body.surname, req.body.nickname, req.body.born],
    (err, result) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.json({ success: true, id: result.insertId, uuid: req.body.id })
      }
    }
  )
})

//*Delete
app.delete(`/authors/:id`, (req, res) => {
  // return res.json.status(401)

  sql = `DELETE FROM authors WHERE id = ?`
  connection.query(sql, [req.params.id], err => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.json({ success: true, id: +req.params.id })
    }
  })
})

//*Edit authors
app.put(`/authors/:id`, (req, res) => {
  const { name, surname, nickname, born } = req.body
  //  return res.json.status(401)
  const sql = `
  UPDATE authors SET name = ?, surname = ?, nickname = ?, born = ? WHERE id = ?`
  connection.query(sql, [name, surname, nickname, born, req.params.id], err => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.json({ message: `success`, id: +req.params.id })
    }
  })
})

//*Get books
app.get("/books", (req, res) => {
  const sql = `
  SELECT b.id, title, pages, name, surname, genre, author_id
  FROM books as b
  LEFT JOIN authors as a
  ON b.author_id = a.id
  `
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500)
    } else {
      res.json(results)
    }
  })
})

//*Add new book
app.post(`/books`, (req, res) => {
  const { title, pages, genre, author_id } = req.body
  const sql = `
  INSERT INTO books (title, pages, genre, author_id) VALUES (?, ?, ?, ?)
  `
  connection.query(sql, [title, pages, genre, author_id], (err, results) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.json({ success: true, id: results.insertId, uuid: req.body.id })
    }
  })
})

//* Delete book
app.delete(`/books/:id`, (req, res) => {
  // return res.json.status(401)

  sql = `DELETE FROM books WHERE id = ?`
  connection.query(sql, [req.params.id], err => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.json({ success: true, id: +req.params.id })
    }
  })
})

//*Edit book
app.put("/books/:id", (req, res) => {
  const { title, pages, genre, author_id } = req.body
  const sql = "UPDATE books SET title = ?, pages = ?, genre = ?, author_id = ? WHERE id = ?"
  console.log(req.body)
  connection.query(sql, [title, pages, genre, author_id, req.params.id], err => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.json({ success: true, id: +req.params.id })
    }
  })
})

//*Add new hero
app.post(`/heroes`, (req, res) => {
  let type
  let image
  let filename = null
  if (req.body.image) {
    if (req.body.image.indexOf("data:image/png;base64,") === 0) {
      type = `png`
      image = Buffer.from(req.body.image.replace(/^data:image\/png;base64,/, ""), "base64")
    } else if (req.body.image.indexOf("data:image/jpeg;base64,") === 0) {
      type = `jpg`
      image = Buffer.from(req.body.image.replace(/^data:image\/jpeg;base64,/, ""), "base64")
    } else {
      res.status(500).send(`Incorrenct image format`)
      return
    }

    filename = md5(uuidv4()) + `.` + type
    fs.writeFileSync(`public/images/` + filename, image)
  }
  const { name, good, book_id } = req.body
  const sql = `
  INSERT INTO heroes (name, good, book_id, image) VALUES ( ?, ?, ?, ?)
  `
  connection.query(sql, [name, good, book_id, filename !== null ? (`images/${filename}`) : null], (err, results) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.json({ success: true, id: results.insertId, uuid: req.body.id })
    }
  })
})

//* Get heroes
app.get("/heroes", (req, res) => {
  const sql = `
    SELECT h.id, h.name, a.name AS authorName, a.surname AS authorSurname, good, title, book_id, h.image
    FROM heroes as h
    LEFT JOIN books as b
    ON h.book_id = b.id
    LEFT JOIN authors as a
    ON b.author_id = a.id
    ORDER BY h.id DESC
  `
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.json(results)
    }
  })
})

//* Edit hero
app.put("/heroes/:id", (req, res) => {
  const { name, good, book_id } = req.body
  const sql = "UPDATE heroes SET name = ?, good = ?, book_id = ? WHERE id = ?"
  console.log(req.body)
  connection.query(sql, [name, good, book_id, req.params.id], err => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.json({ success: true, id: +req.params.id })
    }
  })
})

app.delete('/heroes/:id', (req, res) => {

  let sql = 'SELECT image FROM heroes WHERE id = ?';
  connection.query(sql, [req.params.id], (err, results) => {
    if (err) {
      res.status
    } else {
      if (results[0].image) {
        fs.unlinkSync('public/' + results[0].image);
      }
    }
  });

  sql = 'DELETE FROM heroes WHERE id = ?';
  connection.query(sql, [req.params.id], (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ success: true, id: +req.params.id });
    }
  });
});

//* Get stats for home page
app.get("/stats", (req, res) => {
  const sql = `
  SELECT 'authors' AS name, COUNT(*) AS count, NULL AS stats
  FROM authors
  UNION
  SELECT 'books' AS name, COUNT(*) AS count, MAX(pages)
  FROM books
  UNION
  SELECT 'heroes' AS name, COUNT(*) AS count, SUM(good)
  FROM heroes
`
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.json(results)
    }
  })
})

app.listen(port, () => {
  console.log(`Library server klauso ${port} porto.`)
})
