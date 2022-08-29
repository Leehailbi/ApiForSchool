const express = require("express")
const mongoose = require("mongoose")


// School Schema

const schSchema  = new mongoose.Schema({
    Schoolname:{
        type: String,
        required: true,
        unique: true,
        trim:true,
        
    },
    SchoolType:{
        type: String,
        required: true
    },
    
    highestClass:{
        type: String,
    },
    Totalstudents:{
        type: Number, 
        trim: true  
        },
    
    TotalTeachers:{
        type: Number,
        trim: true
        
    },
    NumbersOfrooms:{
        type: Number,
        trim: true
    },
    address:{
        type: String,
        required: true
    }
})

// we are creating a new collection
const Schdetails = mongoose.model('Schdetails', schSchema)
module.exports = Schdetails

