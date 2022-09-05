const express = require("express")
const {createClass,getClass,getClassById,updateClassById,deleteClassById} = require("../controllers/class")

const {validate} = require("../validators/validation")
const {classRules,Id} = require("../validators/validator")
const classRouter = express.Router()

classRouter.post("/api/createClass",validate(classRules()),createClass)
classRouter.get("/api/getClass", getClass)
classRouter.get("/api/getClassById/:id",validate(Id()),getClassById)
classRouter.patch("/api/updateClassById/:id",validate(classRules()),updateClassById)
classRouter.delete("/api/deleteClassById/:id",deleteClassById)
module.exports = classRouter
