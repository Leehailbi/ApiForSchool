const express = require("express")
const {CreateSchoolData, GetAllSchoolData,GetSchoolDataById,UpdateSchoolData, DeleteSchoolData} = require("../controllers/SchoolControllers")
//const { post } = require("./userRouter")
const { body, validationResult } = require('express-validator');

//Used to create a new router object
const SchoolRouter = express.Router()

SchoolRouter.post("/api/AddSchoolinfo",[body("Schoolname").notEmpty(), body("SchoolType").notEmpty(),
body("SchoolType").notEmpty, body("address").notEmpty()],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() 
        //message: "School Name should not be empty"
    });
    }
},CreateSchoolData)
SchoolRouter.get("/api/getSchoolinfo",GetAllSchoolData)
SchoolRouter.get("/api/getSchoolinfo/:id",GetSchoolDataById)
SchoolRouter.patch("/api/updataSchoolinfo/:id",UpdateSchoolData)
SchoolRouter.delete("/api/deleteSchoolinfo/:id",DeleteSchoolData)

module.exports = SchoolRouter
