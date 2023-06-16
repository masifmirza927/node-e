const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name should be proper"]
    },
    city: {
        type: String,
        required: [true, "city is required"],
        enum: {
            values: ['Lodhran', 'Bahawalpur'],
            message: '{VALUE} city is not supported'
          }
    }
})

const StudentModel = mongoose.model('Student', studentSchema);
module.exports = StudentModel;