const express = require('express')
const dotenv = require ('dotenv')
const cors = require ('cors')

dotenv.config();

const app = express();
//const port = 3008;
const port = process.env.PORT;
const { connection } = require('./config/db.js')

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/*app.get('/about', (req, res) => {
    res.send('Api de prueba con entregables')
  })

app.get('/entregables', (req, res) => {
  res.send('Usuarios')
})*/

//const mysql = require('mysql')
/*const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'arca'
})*/

// Conexiones
app.use(require('./routes/routes.js'));

app.listen(port, () => {
  console.log(`App de ejemplo de Api escuchando el puerto ${port}`)
})

/*connection.connect()

connection.query('SELECT * FROM entregable', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].IdEntregable)

  rows.forEach((row, index) => {
    console.log(`${index} -> ${row.IdEntregable} - ${row.Tipo} - ${row['Titulo']}`)
  });
  
})

app.get('/user', (req, res) => {
  res.send(req.query.a)
})

connection.end()
*/