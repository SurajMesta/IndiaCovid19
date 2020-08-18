const express= require('express')
const appRouter= express.Router()
const mongoose= require('mongoose')
const User= mongoose.model('Product')
const joi= require('@hapi/joi')
const bcrypt= require('bcryptjs')
const jwt= require('jsonwebtoken')
const {TOKEN_SECRET}= require('../config/config')
const verifyToken= require('./verifyToken')

const Schema={
    signupValid:joi.object({
    firstname:joi.string().required().max(10).min(3),
    lastname:joi.string().required().max(10).min(3),
    email:joi.string().required().email().max(40).min(10),
    password:joi.string().required().max(20).min(5)
    })
}

appRouter.post('/signup',(req,res)=>{
    const{firstname,lastname,email,password}=req.body
    User.findOne({email:email}).then(data=>{
    

        if(data){
            res.json({message:"Email Already Taken Please use a different One"})
        }
        else{
            const result=Schema.signupValid.validate(req.body)
            // res.json(result)
            if(result.error){
                res.json({message:result.error.details[0].message})
            }
            else{
                
                bcrypt.genSalt(10,(err,salt)=>{
                    if(err){
                        res.json(err)
                    }
                    else{
                        bcrypt.hash(password,salt,(err,hash)=>{
                            if(err){
                                res.json(err)
                            }
                            else{
                                const user=new User({
                                    firstname,
                                    lastname,
                                    email,
                                    password:hash
                                })

                                user.save().then(mydata=>{
                                    res.json({message:"Signup Success You may login now"})
                                }).catch(err=>{
                                    res.json({message:"Signup Failed Please try after some time"})
                                })
                            }
                        })
                    }
                })
            }

        }

    }).catch((err)=>{
        res.send(err)
    })
    
})

appRouter.post('/login',(req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        res.json({message:"Please fill out all the fields"})
    }

    else{
         User.findOne({email:email}).then(data=>{
        if(!data){
            res.json({message:"Email or Password is Wrong"})
        }
        else{
           bcrypt.compare(password,data.password,(err,isMatch)=>{
               if(err){
                   res.json({message:"Something went wrong"})
               }
               else{
                   if(isMatch){ 
                   const token= jwt.sign({_id:data._id},TOKEN_SECRET)
                   req.headers=token
                   res.json({token:token})
                 

                   }
                   else{
                       res.json({message:"Email or Password is wrong"})
                   }
               }
           })
        }

    }).catch(err=>{
        res.json({message:"Something Went Wrong"})
    })

    }

   
})

appRouter.get('/home',verifyToken,(req,res)=>{
   res.json({message:"welcome"})
})






module.exports=appRouter