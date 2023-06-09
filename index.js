const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (request, response) => {
  const obj = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
}
   response.json(obj);
   
})

app.listen(3003, () => {
  console.log("server is running");
})