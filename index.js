const express = require("express");
const app = express();
const mongoose = require('mongoose');

app.use(express.json())






mongoose.connect('mongodb://127.0.0.1:27017/studentsDbE').then( () => {
// http://localhost:3003/
    app.listen(3003, () => {
        console.log("db & server is running");
    })
} )

