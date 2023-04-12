const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

console.clear();
const port = process.env.PORT;

const app = express();

//servir contenido estatico
app.use(express.static("public"));

//HANDLEBARS
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//servir contenido con handlebars enviando opciones
app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Juan Diego",
    titulo: "curso de node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Juan Diego",
    titulo: "curso de node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Juan Diego",
    titulo: "curso de node",
  });
});

//servir contenido estatico con un ruta definida
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404/index.html");
});

//puerto donde esta escuchando nuestro servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
