const express = require("express");
const app = express();
const mongoose = require('mongoose');
const StudentModel = require("./models/StudentModel");


app.use(express.json())

app.get("/student", (request, response) => {

        const studentRec = StudentModel.findById('648afcefb64fe6922bcc8f70');
        console.log(studentRec)
})



mongoose.connect('mongodb://127.0.0.1:27017/studentsDbE').then( () => {
// http://localhost:3003/
    app.listen(3003, () => {
        console.log("db & server is running");
    })
} )

