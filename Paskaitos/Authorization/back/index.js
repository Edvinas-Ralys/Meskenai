const express = require("express")
const cors = require("cors")
const { v4: uuidv4 } = require("uuid")
const bodyParser = require("body-parser")
const mysql = require("mysql")
const md5 = require("md5")
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "auth",
})
const app = express()
app.use(cors())
const port = 3001

app.use(cors())
app.use(express.static("public"))
app.use(bodyParser.json())

connection.connect()

const checkUserIsLogged = (user, res) => {
  if (user) {
    return true;
  } else {
    res.status(401).json({
       message: 'Not logged in',
       status:`login`
       });
  }
}

const checkUserIsAuthorized = (user, res, roles) => {
  if (user && roles.includes(user.role)) {
    return true;
  } else if (user && roles.includes('self:' + user.id)) {
    return true;
  } else if (user) {
    res.status(401).json({
      message: 'Not authorized',
      status: 'role'
    });
  } else {
    res.status(401).json({
      message: 'Not logged in',
      status: 'login'
    });
  }
}

// router

app.get("/", (req, res) => {
  console.log("Buvo užklausta /")
  res.send("Labas, SERVERI")
})


//*Middleware
const doAuth = (req, res, next) => {
  const token = req.query.token || req.body.token || '';

  if (token === '') {
    return next();
  }
  const sql = `
    SELECT users.username, users.id, users.role
    FROM sessions
    LEFT JOIN users ON sessions.user_id = users.id
    WHERE sessions.id = ? AND sessions.time > ?
  `;
  const time = Date.now() - 1000 * 60 * 60 * 24;
  connection.query(sql, [token, time], (err, results) => {
    // console.log(`connection to DB`)
    if (err) {
      res.status(500);
    } else {
      if (results.length > 0) {
        const user = results[0];
        // console.log(user)
        req.user = user;
      }
    }
    return next();
  });


}
app.use(doAuth)

//login
app.post(`/login`, (req, res) => {
  //*Information sent from browser
  const { username, password } = req.body
  //*What we need from DB
  const sql = `SELECT * FROM users WHERE username = ? AND password = ?`
  //*Connects to DB and seraches for sql parameters by username and md5pass
  connection.query(sql, [username, md5(password)], (err, results) => {
    if (err) {
      res.status(500)
    } else {
      //*If there are results
      if (results.length > 0) {
        //*Create token for browser
        const token = md5(uuidv4())
        //*Send to browser token and users name
        const sql = `INSERT INTO sessions (id, user_id, time) VALUES (?, ?, ?)`
        connection.query(sql, [token, results[0].id, Date.now()], err => {
          if (err) {
            res.status(500)
          } else {
            res.json({ success: true, token, username: results[0].username, role:results[0].role })
          }
        })
      } else {
        res.status(401).json({ message: `Invalid username or password` })
      }
    }
  })
})

//add fruit
app.post(`/fruits`, (req, res) => {


  if (!checkUserIsAuthorized(req.user, res, [`admin`, `user`])) {
    return;
  }


  const { name, color, shape } = req.body
  const sql = "INSERT INTO fruits (name, color, shape) VALUES (?, ?, ?)"
  connection.query(sql, [name, color, shape], (err, results) => {
    if (err) {
      // console.log(err)
    } else {
      res.json({ success: true, id: results.insertId, uuid:req.body.id })
    }
  })
})


app.get('/fruits', (req, res) => {
  // console.log(req.user)
  if (!checkUserIsAuthorized(req.user, res, [`admin`, `user`, `animal`])) {
    return;
  }
  const sql = 'SELECT * FROM fruits';
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.json(results);
    }
  });
});

//*Edit fruits
app.put(`/fruits/:id`, (req, res) =>{
  if (!checkUserIsAuthorized(req.user, res, [`admin`, `user`])) {
    return;
  }
  const {name, color, shape} = req.body
  const sql =`
  UPDATE fruits SET name = ?, color = ?, shape = ? WHERE id = ?`
  connection.query(sql, [name, color, shape, req.params.id], (err) => {
    if(err){
      res.status(500)
    }else{
      res.json({message:`success`, id: +req.params.id})
    }
  })
})


//*Delete
app.delete(`/fruits/:id`, (req, res) => {
  if (!checkUserIsAuthorized(req.user, res, [`admin`])) {
    return;
  }
  sql = `DELETE FROM fruits WHERE id = ?`
  connection.query(sql, [req.params.id], (err) => {
    if(err){
      res.status(500)
    } else{
      res.json({success:true, id:+req.params.id})
    }
  })
})


//*Register user
app.post(`/users`, (req, res) => {
  const { username, password} = req.body
  const sql = "INSERT INTO users (username, password, role) VALUES (?, ?, ?)"
  connection.query(sql, [username, md5(password), `animal`], (err) => {
    if (err) {
     res.status(500)
    } else {
      res.json({ success: true})
    }
  })
})


//get users
app.get('/users', (req, res) => {

  if (!checkUserIsAuthorized(req.user, res, [`admin`])) {
    console.log(checkUserIsAuthorized(req.user, res, [`admin`]))
    return;
  }

  const sql = 'SELECT * FROM users';
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.json(results);
    }
  });
});


//*Delete user
app.delete(`/users/:id`, (req, res) => {
  if (!checkUserIsAuthorized(req.user, res, [`admin`])) {
    return;
  }
  sql = `DELETE FROM users WHERE id = ?`
  connection.query(sql, [req.params.id], (err) => {
    if(err){
      res.status(500)
    } else{
      res.json({success:true, id:+req.params.id})
    }
  })
})


//*Edit user
app.put(`/users/:id`, (req, res) =>{
  if (!checkUserIsAuthorized(req.user, res, [`admin`])) {
    return;
  }
  const {role} = req.body
  const sql =`
  UPDATE users SET role = ? WHERE id = ?`
  connection.query(sql, [role, req.params.id], (err) => {
    if(err){
      res.status(500)
    }else{
      res.json({message:`success`, id: +req.params.id})
    }
  })
})

app.listen(port, () => {
  console.log(`AUTH server klauso ${port} porto.`)
})
