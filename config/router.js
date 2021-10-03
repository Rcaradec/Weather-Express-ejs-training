const express = require("express");
const router = express.Router();
const dayjs = require("dayjs");
//import dayjs from 'dayjs' // ES 2015
dayjs().format();
var utc = require("dayjs/plugin/utc");
dayjs.extend(utc);
require("dayjs/locale/fr");
// import 'dayjs/locale/fr' // ES 2015

dayjs.locale("fr"); // use locale globally
dayjs().locale("fr").format(); // use locale in a specific instance

const capitales = require("../data/capitales.json");

router.get("/", (request, response) => {
  const capitaleName = capitales.forEach((element) => {
    console.log(element.name);
    return element.name;
  });

  response.render("index.ejs", { capitales });
});

router.get("/meteo", (request, response) => {
  let cityPicked;
  capitales.forEach((element) => {
    if (element.name === capitales) {
      cityPicked = element;
    }
  });
  let now = dayjs().format("dddd  DD  MM  YYYY");
  console.log(now);

  response.render("meteo.ejs", { capitales, now });
});
router.get("/population", (request, response) => {
  response.render("population.ejs", { capitales });
});
router.get("/villes", (request, response) => {
  response.render("villes.ejs", { capitales });
});

module.exports = router;
