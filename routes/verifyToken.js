const jwt= require('jsonwebtoken')
const {TOKEN_SECRET}=require('../config/config')
const mongoose= require('mongoose')
const User=mongoose.model('Product')

const verifyToken=(req,res,next)=>{
    const {authorization}=req.headers
    if(!authorization) return console.log('Please Login')
      
    else{
        const token= authorization.replace("Bearer ","")
        const data=jwt.verify(token,TOKEN_SECRET)

       const {_id}=data
       User.findById({_id}).then(data=>{
         req.user=data
         next()
       }).catch(err=>{
           res.json(err)
       })

    }
    
  
    



}

module.exports= verifyToken