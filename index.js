const express = require("express");
const app = express();
const mongoose = require('mongoose');
const StudentModel = require("./models/StudentModel");
const multer  = require('multer')
const upload = multer({ dest: './uploads/' })
const fs = require("fs");
const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors());

// how to upload file/image
app.post("/upload-image", upload.single('image'), (request, response) => {
    console.log(request.file);
    let ext = request.file.mimetype.split("/")[1];
    if(ext == 'plain') {
        ext = "txt";
    }
    fs.rename(request.file.path, request.file.path + "." + ext, () => {
        console.log("done")
    });
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

app.get("/student/:id", async (request, response) => {
    const id = request.params.id;
    try {
        const student = await StudentModel.findById(id);
        return response.json({
            status: true,
            student: student
        })
    }catch (error) {
        return response.json({
            status: false,
            message: "Student not found"
        })
    }
})

app.post("/create-student", upload.single('image'), async (request, response) => {
   
    let ext = request.file.mimetype.split("/")[1];
    const imageName = request.file.path + "." + ext;
    fs.rename(request.file.path, imageName, () => {
        console.log("done")
    });


    try {
        request.body.image = imageName;
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

