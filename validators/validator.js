const express = require("express")
const clasSchema =require("../models/class")


const { check,param } = require("express-validator")
const classRules = (method) => {
  return [
    check("className", "Class Name is required")
      .trim()
      .notEmpty(),
      check("teacherId","Teacher Id is required").notEmpty().trim().isLength({
        min:4, max:8}), 
      check("section","Section is required") .trim()
      .notEmpty()
  ]
}
const Id = (method) => {
    return [
      param("id"," Id is required").isMongoId().trim()
    ]
  }
  const teacherRules = (method) => {
    return [
      check("teacherName", "Teacher Name is required")
        .trim()
        .notEmpty()
        .isLength({ min: 1, max: 15 })
        .withMessage(
          "Teacher Name,  must be Minimum of 1 and Maximum of 18 characters"
        ),check("employeeId","Employee Id is reequired") .trim()
        .notEmpty()
        .isLength({ min: 5, max: 8 }),
        check("teacherAttendance","Teacher attendance is required").trim()
        .notEmpty(),
        check("teacherContact", "Teacher contact is required").trim()
        .notEmpty()
        .isLength({ min: 10 }) 
    ]
  }
  
  const schoolRules = (method) => {
    return [
      check("schoolName", "School Name is required")
        .trim()
        .notEmpty(),
        check("schoolType"," School type is required") .trim()
        .notEmpty(),
        check("address","Address is required").trim()
        .notEmpty()
        .isLength({ min: 1, max: 15 })
    ]
  }


  const studentRules = (method) => {
    return [
      check("studentName", "Student Name is required")
        .trim()
        .notEmpty()
        .isLength({ min: 1, max: 15 })
        .withMessage(
          "Student Name,  must be Minimum of 1 and Maximum of 16 characters"
        ),check("studentRollNo","Student roll number is required").trim()
        .notEmpty()
        .isLength({ min: 5, max: 7 }),
        check("studentAttendance","Student attendance is required").trim()
        .notEmpty(),
        check("section","Section is required") .trim()
        .notEmpty(),
        check("studentContact","Student contact is required").trim()
        .notEmpty()
        .isLength({ min: 10})
        
    ]
  }

  const signUpRules = (method) => {
    return [
      check("email", "Enter the valid email").isEmail()
        .trim()
        .notEmpty()
        .isLength({ min: 1, max: 15 })
        .withMessage(
          " Email Name,  must contain a special characeter @"
        ),check("password", "Password is required").notEmpty()
        .isLength({ min:8})
        
    ]
  }

module.exports = {classRules,Id,teacherRules,schoolRules,studentRules,signUpRules}

