const express = require("express")
const mongoose = require("mongoose")


// School Schema

const schoolSchema  = new mongoose.Schema({
    schoolName:{
        type: String,
        required: [true,"School name is required"],
        unique: true,
        trim:true,
        
    },
    schoolType:{
        type: String,
        required: [true, "School type is required"]
    },
    
    highestClass:{
        type: String,
    },
    totalStudents:{
        type: Number, 
        trim: true  
        },
    
    totalTeachers:{
        type: Number,
        trim: true
        
    },
    numberOfRooms:{
        type: Number,
        trim: true
    },
    address:{
        type: String,
        required: [true," Address is required"]
    }
})

// we are creating a new collection
const School = mongoose.model('school', schoolSchema)
module.exports = School

