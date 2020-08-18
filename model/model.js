const mongoose= require('mongoose')
const Schema= mongoose.Schema

const Product= new Schema({
    firstname:{type:String,required:true,max:10,min:3},
    lastname:{type:String,required:true,max:10,min:3},
    email:{type:String,required:true,max:40,min:10},
    password:{type:String,required:true,max:20,min:5}

},{
    "collection":"mycollection"
})


mongoose.model('Product',Product)