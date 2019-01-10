const mongoose = require('mongoose');
const Course = require('./models/courses');

mongoose.connect('mongodb://localhost:27017/courses_crud_video_1', { useNewUrlParser: true })
    .then(console.log("Connected to MongoDB"))
    .catch(console.log)

Course.find({author: "Mosh"})
    .limit(10)
    .select({name: 1, author: 1})
    .then(dulieu => console.log(dulieu))
    .catch(console.log)

Course.find({price: {$gte: 10, $lte: 20}})
.select('price name author')
.then(console.log)
.catch(console.log)

Course.find({ price: {$in: [10,15,20]} })
.select('name price author')
.then(console.log)
.catch(console.log)

Course.find()
.or([{author:"Mosh"},{isPublished: true}])
.select('name author isPublished')
.then(console.log)
.catch(console.log)

Course.find({name: /^node/i})
.then(dulieu =>{
    console.log("\nTìm khóa học có tên bắt đầu bằng Node")
    console.log(dulieu);
})
.catch(console.log)

Course.find({name: /js$/i})
.then(dulieu =>{
    console.log("\nTìm khóa học có tên kết thúc bằng JS")
    console.log(dulieu);
})
.catch(console.log)

Course.find({name: /.*js.*/i})
.then(dulieu =>{
    console.log("\nTìm khóa học có tên chứa chữ JS")
    console.log(dulieu);
})
.catch(console.log)

Course.find()
.countDocuments()
.then(console.log)
.catch(console.log)

Course.find()
.skip(2)
.then(dulieu=>{
    console.log("\nBỏ qua 2 document")
    console.log(dulieu)
})
.catch(console.log)

Course.findById("004")
.select('name author price')
.then(dulieu=>{
    console.log("\nFind By Id")
    console.log(dulieu)
})
.catch(console.log)

Course.findOne({author: "Mosh"})
.select('name author price')
.then(dulieu=>{
    console.log("\nFind One")
    console.log(dulieu)
})
.catch(console.log)

// update document

Course.findById("002")
.then(dulieu=>{
    dulieu.author = "Huỳnh Duy Anh",
    dulieu.name = "Machine Learning"
    dulieu.save()
    .then(console.log)
    .catch(console.log)
})

Course.findByIdAndUpdate("004",{
    $set: {isPublished: true}
})
.then(console.log)
.catch(console.log)

Course.updateOne({author: "Mosh"},{
    $set: {author:"Huỳnh Duy Anh 02"}
})
.then(dulieu =>{
    console.log("\n Update one");
    console.log(dulieu);
})
.catch(console.log)

Course.updateMany({author: "Mosh"},{
    $set: {isPublished: 1}
})
.then(dulieu =>{
    console.log("\n Update many");
    console.log(dulieu);
})
.catch(console.log)