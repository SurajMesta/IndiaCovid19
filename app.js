const express= require('express')
const app= express()
const PORT = Number(process.env.PORT || 5000)
const mongoose= require('mongoose')
const config= require('./config/config')
const path= require('path')

require('./model/model')
app.use(express.json())
app.use(require('./routes/router'))


mongoose.connect(config.DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(myData=>{
    console.log('Mongoose connection Success')
},(err)=>{
    console.log('Mongoose connection Failed')
})



if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname, "client" , "build" , "index.html"))
    })
}







app.listen(PORT,()=>{
    console.log(`Server is up and running at PORT ${PORT}`)
})