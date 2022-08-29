const express = require("express")
const AppError = require("./../utils/appError")
const catchAsync = require("./../utils/catchAsync")
const Schdetails = require("../models/SchoolSchema")

  
// We Will Handle Post Request

const CreateSchoolData = async(req,res)=>{

    try{
        const Adddetails = new Schdetails(req.body)
        //console.log(req.body)
        const addsch = await Adddetails.save()
        res.status(201).send(addsch)

    }catch(e){
        res.status(400).send(e)
    }
}
// handle Get request 
const GetAllSchoolData = async(req,res)=>{
    try{
        const getSchool = await Schdetails.find({})
        res.send(getSchool)

    }catch(e){
        res.status(400).send(e)
    }
}

// Handle get request of individual 

const GetSchoolDataById = async(req,res)=>{
    try{     
        const _id = req.params.id 
        
        const getindiv = await Schdetails.findById(_id) 
        // if(!getindiv){
        //     return  res.status(400).send("Id is not Found")
        // }
        res.status(200).json({
            status: "success",
            data:{
                getindiv
            }
        })
    }
    catch(e){
        res.status(400).send(e)
    }
}

// Handle Patch request for update 

const UpdateSchoolData =  async(req,res)=>{
    try{
        const _id = req.params.id
        const getindiv = await Schdetails.findByIdAndUpdate(_id, req.body,{
            new: true
        })

        // if(!getindiv){
        //     return console.log("Id is not found")
        // }
         
        res.send(getindiv)

    }catch(e){
        res.status(500).send(e)
    }
}

// Handle Delete request of individual 
const DeleteSchoolData =  async(req,res)=>{
    //const schId = req.params.id
    try{
        const _id = req.params.id
        const getindiv = await Schdetails.findByIdAndDelete(_id)
        res.send(getindiv)
        

    }catch(e){
        res.status(500).send(e)
    }
}

module.exports = {CreateSchoolData, GetAllSchoolData,GetSchoolDataById,UpdateSchoolData, DeleteSchoolData}

