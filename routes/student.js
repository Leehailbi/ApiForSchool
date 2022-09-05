const express = require("express")
const {createStudent,getStudent,getStudentById,updateStudentById,deleteStudentById} = require("../controllers/student")
const {validate} = require("../validators/validation")
const {studentRules,Id} = require("../validators/validator")
const studentRouter = express.Router()

studentRouter.post("/api/CreateStduent",validate(studentRules()),createStudent)
studentRouter.get("/api/getStudent",getStudent)
studentRouter.get("/api/getStudentById/:id",validate(Id()),getStudentById)
studentRouter.patch("/api/updateStudentById/:id",validate(studentRules()),updateStudentById)
studentRouter.delete("/api/deleteStudentById/:id",deleteStudentById)
module.exports = studentRouter