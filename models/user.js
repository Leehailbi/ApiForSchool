const express = require("express")
const mongoose = require("mongoose")
const validator = require("validator")
//Mongoose schema defines the structure of the document
const userSchema  = new mongoose.Schema({
    schoolName:{
        type: String,
        unique: true,
        lowercase:true
    },
    email:{
        type: String,
        required: [true,"Email is required"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "please provide a valid email"]


    },
    
    password:{
        type: String,
        required: [true,"Password is required"],
        minlength: 8
    }
})

// we are creating a new collection
const User = mongoose.model('user', userSchema)
//Mongoose model provides an interface to the database for creating, querying, updating, deleting records,
module.exports = User

