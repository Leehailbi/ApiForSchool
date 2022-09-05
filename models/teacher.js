const express = require("express")
const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema({
    teacherName:{
        type: String,
        required: true,
        trim:[true ,"Teacher name is required"]

    },
    employeeId:{
        type:String,
        unique:true,
        required: [true, "Please provide The employee Id"]

    },
    teacherAttendance:{
        type: String,
        trim: true,
        required :[true,"please provide the teacher a  ttendance"]

    },
    subjectTeacher:{
        type: String,
        trim: true

    },
    class:{
        type: String

    },
    teacherContact:{
        type: Number,
        min:10,
        required :[true," Teacher Contact is required "]


    }
})

const teacher = mongoose.model("teacher", teacherSchema)
module.exports = teacher