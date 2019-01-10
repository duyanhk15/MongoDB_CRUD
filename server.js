const mongoose = require('mongoose');
const Course = require('./models/courses');

mongoose.connect('mongodb://localhost:27017/courses_crud_video_1', { useNewUrlParser: true })
    .then(console.log('Kết nối thành công đến mongodb'))
    .catch(console.log)

const newCourse = new Course({
    name: "Tối ưu hóa hệ thống bằng Node js",
    author: "Huỳnh Duy Anh",
    tags: ["MongoDB", "Mongoose", "Node JS", "IO.js"],
    isPublished: true,
    price: 400
});

newCourse.save()
    .then(course => console.log(course))
    .catch(console.log)