const express = require("express")
const Students = require("../models/student")
const {body, param, validationResult} = require("express-validator")


// Create a student data
const createStudent = async(req,res)=>{

    try{
        const addStudent = new Students(req.body)
        //console.log(req.body)
        const addStd = await addStudent.save()
        res.status(201).send(addStd)

    }catch(e){
        res.status(400).send(e)
    }
}
// handle Get request 
const getStudent = async(req,res)=>{
    try{
        const getStud = await Students.find({})
        res.send(getStud)

    }catch(e){
        res.status(400).send(e)
    }
}

// Handle get request of individual 

const getStudentById = async(req,res)=>{
    try{     
        const _id = req.params.id 
        param('_id').isMongoId(),(req, res) => {
               if (!validationResult(req).isEmpty()) {
                    res.status(422).send("Invalid Id ")
   }
  }
        const getIndiv = await Students.findById(_id) 
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
// Update Student details Using Id
const updateStudentById =  async(req,res)=>{
    try{
        const _id = req.params.id
        const updateIndiv = await Students.findByIdAndUpdate(_id, req.body,{
            new: true
        })
        res.send(updateIndiv)

    }catch(e){
        res.status(500).send(e)
    }
}

// Handle Delete request of individual 
const deleteStudentById =  async(req,res)=>{
    try{
        const _id = req.params.id
        const delIndiv = await Students.findByIdAndDelete(_id)
        res.json({
            status: "deletion success ",
            data:{
                delIndiv
            }
        }) 

    }catch(e){
        res.status(500).json({
            status:200,
            message: "deletion is successfull"
        })
    }
}


module.exports = {createStudent,getStudent,getStudentById,updateStudentById,deleteStudentById}