const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name should be proper"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    address: {
        type: String,
        required: [true, "city is required"]
    },
    about: {
        type: String,
    },
    image: {
        type: String,
        required: [true, "image is required"]
    }
})

const StudentModel = mongoose.model('Student', studentSchema);
module.exports = StudentModel;