const express = require("express"),
  app = express(),
  noticias = require("./routes/noticias"),
  index = require("./routes/index");

app.set("view engine", "ejs");

//Static Folders
app.use(express.static("./public"));
app.use(express.static("./node_modules/moment/min"));
app.use(express.static("./node_modules/bootstrap/"));
app.use(express.static("./node_modules/jquery/"));
app.use(express.static("./node_modules/chart.js/"));
app.use(express.static("./node_modules/popper.js/"));

//Routes
app.use("/", index).use("/noticias", noticias);
//Nao funciona com duas rotas
// app.use("/noticias", noticias);

//Server Start
app.listen(3000, () => {
  console.log("Listening at " + 3000);
});
