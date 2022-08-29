const userData = require("../models/UserShema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SECRET_KEY = "SCHOOL_API"

// Sinup Details
const Signup = async(req,res)=>{

    const {schoolname ,email, password } = req.body
    try{
        // Check Existing user
        const existinguser = await userData.findOne({email: email})
        if(existinguser){
            return res.status(400).json({
                message: " Email  already Exists"
            })
        }
        // Create Hashed password
        const hashedPassword = await bcrypt.hash(password,10)
        //Create Users
        const result = await userData.create({
            email : email,
            password : hashedPassword,
            schoolname : schoolname
        })
        // Token Generate

        const token = jwt.sign({
            email: result.email, id: result._id
        }, SECRET_KEY)
        res.status(201).json({
            user: result,
            token: token
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            message: "Somthing Went Wrong"
        })
    }
}

// Login Details
const Login = async(req,res)=>{
    const {email, password} = req.body
    try{
        // Check the existing User

        const existinguser = await userData.findOne({email: email})
        if(!existinguser){
            return res.status(404).json({
                message: " User Not Found "
            })
        }
        // compare the password of existing user and password given by user
        const matchPassword = await  bcrypt.compare(password, existinguser.password)
        if (!matchPassword){
            return res.status(400).json({
                message: "Invalid Credentilas"

            })
        }
        // generate Token
        const token = jwt.sign({
            email: existinguser.email, id: existinguser._id
        }, SECRET_KEY)
        res.status(200).json({
            message: "login success",//user: existinguser,
            token: token
        })


    }
    catch(err){
        console.log(err)
        res.status(500).json({
            message: " Invalid Credentials "
        })
    }

}

module.exports = { Signup, Login }