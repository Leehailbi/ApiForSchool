const express = require("express")
const {createSchool, getSchool,getSchoolById,updateSchoolById, deleteSchoolById} = require("../controllers/school")

const {validate} = require("../validators/validation")
const {schoolRules,Id} = require("../validators/validator")

//Used to create a new router object
const schoolRouter = express.Router()

schoolRouter.post("/api/createSchool",validate(schoolRules()),createSchool)
schoolRouter.get("/api/getSchool",getSchool)
schoolRouter.get("/api/getSchoolById/:id",validate(Id()),getSchoolById)
schoolRouter.patch("/api/updataSchoolById/:id",validate(schoolRules()),updateSchoolById)
schoolRouter.delete("/api/deleteSchoolById/:id",deleteSchoolById)
module.exports = schoolRouter
