const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
    name: {
        type: String
    },
    city: {
        type: String
    }
})

const StudentModel = mongoose.model('Student', studentSchema);
module.exports = StudentModel;