const express = require("express");
const router = require("./config/router");

// config serveur
const app = express();
const port = 3000;

// on dit à express ou aller chercher les ressources
app.use(express.static("public"));

// on lui dit ou seront rangés les rendus
// on lui dit d utiliser EJS pour les moteurs de rendus
app.use(router);
app.set("views", "./public/views");
app.set("view engine", "ejs");

// et on lui dit ou ecouter
app.listen(port, () => {
  console.log(`Le serveur écoute içi:  http://localhost:${port}`);
});
