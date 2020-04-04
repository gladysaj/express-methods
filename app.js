const express = require("express");
const app = express();

// para que express pueda interpretar el body
const bodyParser = require("body-parser")
// Peticiones
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

// const User = require("./models/User");

// Para generar rutas hacia un archivo o carpeta 
const path = require("path");

// Hacer que aparezca un mensaje en localhost 
app.get("/", (req, res) => {
  res.send("Hola, estás en mi página");
});

// Route param
app.get("/users/:username", (req, res) => {
  // Params = variables que mandas a través de la ruta  en este caso el username se guarda ahi
  res.json(req.params);
  // const { username } = req.params
  // User.find({username: "gladys"})
})

// :username example
// /david  ==> username = david

// Puertos 8080, 8000, 3000, 3001
app.listen(3000, () => {
  console.log(`App corriendo el puerto 3000`);
})

// En package.json puedes correr se agrego en script el start y ahora puedo usar 
// npm start en la terminal en vez de correrlo directo


// print
function sayHi(req, res, next) {
  console.log("Hola");
  next();
}

// Query param
// ? todo lo que va después es un query param y & para separar cada valor
//users?minAge=30&maxAge=65&role=ADMIN
app.get("/users", sayHi, (req, res) => {
  res.json(req.query);
}); 

// Post
app.post("/users", (req, res) => {
  console.log(`Usuario: ${req.body.username} con password: ${req.body.password}`)
 res.json(req.body)
})


