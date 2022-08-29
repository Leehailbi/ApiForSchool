const express = require("express")
const { Signup, Login } = require("../controllers/userControllers")
//Used to create a new router object
const UserRouter = express.Router()

UserRouter.post("/signupforSchool",Signup)

UserRouter.post("/loginforSchool", Login)

module.exports = UserRouter