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

app.get("/search", (request, response) => {
    const queryIndex = request.query.index;

    console.log("index::", queryIndex);

    const fruits = ["apple", "mango", "banana"];
    const fruit = fruits[queryIndex];

    response.json({
    status: "OK",
    fruit: fruit
  })

  
});


app.listen(3003, () => {
  console.log("server is running");
})