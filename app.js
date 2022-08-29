const express = require("express")
//import school mongodb
const Schdetails = require("./models/conn")
const port = 8000
const router = require("./routes/schoolRouter")
const Userrouters = require("./routes/userRouter")
const userControllers = require("./controllers/userControllers")
const UserRouter = require("./routes/userRouter")
const app =   express()  
 
//Parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json())
// Without `express.json()`, `req.body` is undefined.
app.use(router)
app.use(UserRouter)
app.listen(port ,()=>{
    console.log(`app running on port ${port}....`)
})
