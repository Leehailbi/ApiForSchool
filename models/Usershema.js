const express = require("express")
const mongoose = require("mongoose")
const validator = require("validator")
//Mongoose schema defines the structure of the document
const userSchema  = new mongoose.Schema({
    schoolname:{
        type: String,
        required: [true, 'please tell us schoolname'],
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "please provide a valid email"]


    },
    
    password:{
        type: String,
        required: true,
        minlength: 8
    }
})

// we are creating a new collection
const userData = mongoose.model('userData', userSchema)
//Mongoose model provides an interface to the database for creating, querying, updating, deleting records,
module.exports = userData

