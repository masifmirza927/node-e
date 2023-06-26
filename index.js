const express = require("express");
const app = express();
const mongoose = require('mongoose');
const StudentModel = require("./models/StudentModel");
const multer = require('multer')
const upload = multer({ dest: './uploads/' })
const fs = require("fs");
const cors = require("cors");
const path = require('path');
const convertTograyscale = require("./utils/grayscale");
const resizeImage = require("./utils/resizing");


// middleware
app.use(express.json());
app.use(cors());

require('dotenv').config()
console.log(process.env.HTTP_PATH)

app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));

// how to upload file/image
app.post("/upload-image", upload.single('image'), async (request, response) => {
    let ext = request.file.mimetype.split("/")[1];
    const imgName = request.file.path + "." + ext;

    fs.rename(request.file.path, imgName, () => {

        console.log("done")
    });

    console.log(imgName);
    convertTograyscale(imgName);
    resizeImage(imgName);
    return response.json({
        status: true
    })
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
    } catch (error) {
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

app.put("/update-student/:id", upload.single('image'), async (request, response) => {

    const id = request.params.id;

    let ext = request.file.mimetype.split("/")[1];
    const imageName = request.file.path + "." + ext;
    fs.rename(request.file.path, imageName, () => {
        console.log("done")
    });

    try {
        request.body.image = imageName;
        await StudentModel.findByIdAndUpdate(id, request.body);
        return response.json({
            status: true,
            msg: "Successfully updated"
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

app.delete("/student-delete/:id", async (request, response) => {
    const id = request.params.id;

    try {
        await StudentModel.findByIdAndDelete(id);
        return response.json({
            status: true
        })
    } catch (error) {
        return response.json({
            status: false
        })
    }
});



mongoose.connect('mongodb://127.0.0.1:27017/studentsDbE').then(() => {
    // http://localhost:3003/
    app.listen(3003, () => {
        console.log("db & server is running");
    })
})

