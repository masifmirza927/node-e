const express = require("express");
const app = express();
const mongoose = require('mongoose');
const StudentModel = require("./models/StudentModel");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

// middleware
app.use(express.json());

// how to upload file/image
app.post("/upload-image", upload.single('image'), (request, response) => {
    console.log(request.body);
})


app.get("/students", async (request, response) => {

    try {
        const students = await StudentModel.find();
        return response.json({
            status: true,
            students: students
        })
    } catch (error) {
        return response.json({
            status: false,
            msg: "Students not found"
        })
    }
})

app.post("/student-create", async (request, response) => {
    try {
        await StudentModel.create(request.body);
        return response.json({
            status: true,
            msg: "Successfully created"
        })
    } catch (error) {
        if (error.name === "ValidationError") {
            let errors = {};
      
            Object.keys(error.errors).forEach((key) => {
              errors[key] = error.errors[key].message;
            });
      
            return response.json({
              "status": false,
              errors: errors
            })
          }
    }
})



mongoose.connect('mongodb://127.0.0.1:27017/studentsDbE').then( () => {
// http://localhost:3003/
    app.listen(3003, () => {
        console.log("db & server is running");
    })
} )

