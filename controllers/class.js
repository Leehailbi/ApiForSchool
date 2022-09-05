const express = require("express")
const Class= require("../models/class")



// Create a class 
const createClass = async(req,res)=>{

    try{
        const addClass = new Class(req.body)
        //console.log(req.body)
        const createCls = await addClass.save()
        res.status(201).send(createCls)

    }catch(e){
        console.log(e)
        res.status(400).send(e)
    } 
}
// handle Get request 
const getClass = async(req,res)=>{
    try{
        const getCls = await Class.find({})
        res.send(getCls)

    }catch(e){
        res.status(400).send(e)
    }
}

// Handle get request of individual 

const getClassById = async(req,res)=>{
    try{     
        const _id = req.params.id 

        const getIndiv = await Class.findById(_id) 
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
// Update class data

const updateClassById =  async(req,res)=>{
    try{
        const _id = req.params.id
        const UpdateIndiv = await Class.findByIdAndUpdate(_id, req.body,{
            new: true
        })
        res.send(UpdateIndiv)

    }catch(e){
        res.status(500).send(e)
    }
}

// Handle Delete request of individual 
const deleteClassById =  async(req,res)=>{
    try{
        const _id = req.params.id
        const delIndiv = await Class.findByIdAndDelete(_id)
            res.json({
                data:{
                    delIndiv
                }
            })

    }catch(e){
        res.status(500).send(e)
    }
}


module.exports= {createClass, getClass,getClassById,updateClassById,deleteClassById}