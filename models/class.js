const express = require("express")
const mongoose = require("mongoose")

const clasSchema = new mongoose.Schema({
    className:{
        type: String,
        required: [true,"Class name are required"],
        trim:true

     }
     ,
    section:{
        type:String,
        required: [true, "Section is required"]

    }
    ,
    teacherId:{
        type: String,
        trim: true,
        required :[true,"Teacher Id is required"]

    },
    numberOfStudent:{
        type: Number,
        trim: true

    }
})

const Class = mongoose.model("class",clasSchema)
module.exports = Class