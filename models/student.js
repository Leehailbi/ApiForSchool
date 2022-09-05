const express = require("express")
const mongoose = require("mongoose")
//const { schema } = require("./school")

const studentSchema = new mongoose.Schema({
    studentName:{
        type: String,
        required: [true,"Student name is required"],
        trim:true

    },
    studentRollNo:{
        type:String,
        unique:true,
        required: [true, "Student roll number is required"]

    },
    studentClass:{
        type: String,
        trim: true
    },
    section:{
        type: String,
        trim: true,
        required: [true,"Section is required"]

    },
    studentAttendance:{
        type : Number,
        required : [true, "Student attendance is required"]

    },
    studentContact:{
        type: String,
        required : [true, "Student contact is required"]
        

    }
})

const Student = mongoose.model("student", studentSchema)
module.exports = Student
