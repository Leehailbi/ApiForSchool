const express = require("express")

const { signUp, logIn } = require("../controllers/user")
const {validate} = require("../validators/validation")
const {signUpRules,Id} = require("../validators/validator")
//Used to create a new router object
const userRouter = express.Router()

userRouter.post("/api/signUpSchool",validate(signUpRules()),signUp)

userRouter.post("/api/logInSchool",validate(signUpRules()), logIn)

module.exports = userRouter