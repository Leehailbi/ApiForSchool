const mongoose = require("mongoose")
//Connect to MongoDB
mongoose.connect("mongodb+srv://liya:liyakat123@cluster0.xxnwdy7.mongodb.net/userDetails").then(()=>{
    console.log("connection is SuccessFull")
}).catch((e)=>{
    console.log("No connecion")
})