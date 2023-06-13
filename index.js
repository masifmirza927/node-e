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

const students = [];
// http://localhost:3003/create-user
app.post("/create-user", (request, response) => {
    
    console.log(request.body);

    students.push(request.body);

    response.json({
      students: students
    });

});

// http://localhost:3003/delete-user/2
app.delete("/delete-user/:id", (request, response) => {
    const index = request.params.id;

    students.splice(index, 1);

    response.json({
      students: students
    })

})




// http://localhost:3003/
app.listen(3003, () => {
  console.log("server is running");
})