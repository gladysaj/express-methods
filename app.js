const express = require("express");
const app = express();
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

// Query param
// ? todo lo que va después es un query param y & para separar cada valor
//users?minAge=30
app.get("/users", (req, res) => {
  res.json(req.query);
});