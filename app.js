const express = require("express");
console.clear();
const port = 8080;

const app = express();

//servir contenido estatico
app.use(express.static("public"));

//servir contenido estatico con un ruta definida
app.get("/generic", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
});
app.get("/elements", (req, res) => {
  res.sendFile(__dirname + "/public/elements.html");
});
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
