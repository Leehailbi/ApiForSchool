const express = require("express")
const School = require("../models/school")
const { body, param,validationResult } = require('express-validator')
  
// We Will Handle Post Request

const createSchool = async(req,res)=>{

    try{
        const addSchool = new School(req.body)
        //console.log(req.body)
        const createSch = await addSchool.save()
        res.status(201).send(createSch)

    }catch(e){
        res.status(400).send(e)
    }
}
// handle Get request 
const getSchool = async(req,res)=>{
    try{
        const getSch = await School.find({})
        res.send(getSch)

    }catch(e){
        res.status(400).send(e)
    }
}

// Handle get request of individual 

const getSchoolById = async(req,res)=>{
    try{     
        const _id = req.params.id 
        param('id').isMongoId(),(req, res) => {
               if (!validationResult(req).isEmpty()) {
                    res.status(422).send("Invalid Id ")
   }
  }
        const getIndiv = await School.findById(_id) 
        res.status(200).json({
            status: "success",
            data:{
                getIndiv
            }
        })
    }

    catch(e){
        res.status(400).send(e)
    }
}

// Handle Patch request for update 

const updateSchoolById =  async(req,res)=>{
    try{
        const _id = req.params.id
        const updateIndiv = await School.findByIdAndUpdate(_id, req.body,{
            new: true
        })
        res.send(updateIndiv)

    }catch(e){
        res.status(500).send(e)
    }
}

// Handle Delete request of individual 
const deleteSchoolById =  async(req,res)=>{
    try{
        const _id = req.params.id
        const delIndiv = await School.findByIdAndDelete(_id)
        res.json({
            data:{
                delIndiv
            }
        })

    }catch(e){
        res.status(500).send(e)
    }
}

module.exports = {createSchool, getSchool,getSchoolById,updateSchoolById, deleteSchoolById}

