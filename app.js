const express = require("express")

const connection = require("./models/conn")
const port = 8000
// Routers 
const schoolRouter = require("./routes/school")
const userRouter = require("./routes/user")
const studentRouter = require("./routes/student")
const teacherRouter = require("./routes/teacher")
const classRouter = require("./routes/class")
const app =   express()  
 
//Parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json())
// Without `express.json()`, `req.body` is undefined.
app.use(schoolRouter)
app.use(studentRouter)
app.use(teacherRouter)
app.use(classRouter)
app.use(userRouter)
app.listen(port ,()=>{
    console.log(`app running on port ${port}....`)
})
