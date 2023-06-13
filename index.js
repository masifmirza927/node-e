const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json())

app.get("/", (request, response) => {
  console.log("working...")
})

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

/**
  {
	"name":"ali",
	"city" : "Lodhran"
}
 */

// http://localhost:3003/create-user
app.post("/create-user", (request, response) => {
    
    console.log(request.body)

})



// http://localhost:3003/
app.listen(3003, () => {
  console.log("server is running");
})