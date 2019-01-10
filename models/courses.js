const mongoose = require('mongoose');


const CourseSchema = new mongoose.Schema({
    _id: String,
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean,
    price:  Number
})

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
