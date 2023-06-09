const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (request, response) => {

  const htmlContent = fs.readFileSync("./pages/home.html", "utf-8");
  response.send(htmlContent);

})

app.get("/about", (request, response) => {

  const htmlContent = fs.readFileSync("./pages/home.html", "utf-8");
  response.send(htmlContent);

})

app.listen(3003, () => {
  console.log("server is running");
})