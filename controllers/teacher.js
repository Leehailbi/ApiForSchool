const express = require("express")
const teacher = require("../models/teacher")
const { body, param,validationResult } = require('express-validator')

// Create a teacher data
const createTeacher = async(req,res)=>{
    
    try{
        const addTeacher = new teacher(req.body)       
        const addTch = await addTeacher.save()
        res.status(201).send(addTch)

    }catch(e){
        res.status(400).send(e)
    }
}

// handle Get request
 
const getTeacher = async(req,res)=>{
    try{
        const addTeacher = await teacher.find({})
        res.send(addTeacher)

    }catch(e){
        res.status(400).send(e)
    }
}

// Handle get request of individual 

const getTeacherById = async(req,res)=>{
    try{     
        const _id = req.params.id 
        param('_id').isMongoId(),(req, res) => {
               if (!validationResult(req).isEmpty()) {
                    res.status(422).send("Invalid Id ")
   }
  }
        const getIndiv = await teacher.findById(_id) 
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
// Updata teacher data
const updateTeacherById =  async(req,res)=>{
    try{
        const _id = req.params.id
        const updateIndiv = await teacher.findByIdAndUpdate(_id, req.body,{
            new: true
        })
        res.send(updateIndiv)

    }catch(e){
        res.status(500).send(e)
    }
}

// Handle Delete request of individual 
const deleteTeacherById =  async(req,res)=>{
    try{
        const _id = req.params.id
        const delIndiv = await teacher.findByIdAndDelete(_id)
        // if(_id === delIndiv){
        //     res.send("Data is already deleted")
        // }
            res.json({
                status: "Deletion is success",
                data:{
                    delIndiv
                }
            })

    }catch(e){
        res.status(500).send(e)
    }
}


module.exports = {createTeacher,getTeacher,getTeacherById,updateTeacherById,deleteTeacherById}