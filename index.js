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

// app.get("/search", (request, response) => {
//   const queryIndex = request.query.index;
//   const fruits = ["apple", "mango", "banana"];
//   const fruit = fruits[queryIndex];

//   if(fruit == undefined ) {
//     response.json({
//       status: false,
//     })
//   }else {
//     response.json({
//       status: true,
//       fruit: fruit
//     })
//   }

// });


// http://localhost:3003/student/2
app.get("/student/:id", (request, response) => {

  const id = request.params.id
  const data = [
    {
      "email": "dictum.placerat.augue@hotmail.net",
      "name": "Lilah Terry",
      "country": "Netherlands"
    },
    {
      "email": "nonummy@hotmail.edu",
      "name": "Unity Branch",
      "country": "United Kingdom"
    }
  ];

  response.json({
    result: data[id]
  })

})


app.listen(3003, () => {
  console.log("server is running");
})