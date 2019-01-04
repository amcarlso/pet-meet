const express = require('express');
const controller = require('./controller');
const session = require('express-session');
const checkForSession = require('./middlewares/checkForSession');
require('dotenv').config();
const massive = require('massive');
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

const app = express();

//MIDDLEWARE
app.use( express.json() );
app.use( session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}) );
app.use( checkForSession )

//ENDPOINTS
app.get('/api/animals', controller.getAllAnimals)
app.post('/api/animals', controller.newAnimal)
app.get('/api/users/:id', controller.getUser)
app.get('/api/users', controller.getUsers)


massive(CONNECTION_STRING).then(connection => {
  console.log('connected to database!')
  app.set('db', connection)
  app.listen(SERVER_PORT, console.log(`Listening on port ${SERVER_PORT}`));
}).catch(err => {console.log(err)})
