const express = require("express")
const {createTeacher,getTeacher,getTeacherById,updateTeacherById,deleteTeacherById} = require("../controllers/teacher") 
const {validate} = require("../validators/validation")
const {Id,teacherRules} = require("../validators/validator")
const teacherRouter = express.Router()

teacherRouter.post("/api/createTeacher",validate(teacherRules()),createTeacher)
teacherRouter.get("/api/getTreacher",getTeacher)
teacherRouter.get("/api/getTeacherById/:id",validate(Id()),getTeacherById)
teacherRouter.patch("/api/updateTeacherById/:id",validate(teacherRules()),updateTeacherById)
teacherRouter.delete("/api/deleteTeacherById/:id",deleteTeacherById)

module.exports = teacherRouter