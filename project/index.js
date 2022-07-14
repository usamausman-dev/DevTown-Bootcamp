const express = require("express");
const app = express(); //assigning name to express module
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var ans = String(n1 + n2);
  res.send("The ans is : " + ans);
});

app.get("/about", function (request, response) {
  response.send("<h1>Hi my name is Osama</h1>");
});
app.listen(3000, function () {
  console.log("Server running on port : 3000");
});
