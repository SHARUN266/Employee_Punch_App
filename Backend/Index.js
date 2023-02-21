const express=require('express')
const app=express()
const mongoose=require('mongoose')

const PORT=3000||process.env.PORT
app.get("/",(req,res)=>{
    res.send("Hello word ")
})
mongoose.connect('mongodb+srv://sharun:123@atlascluster.qwa1fxi.mongodb.net/EmployeeAPp?retryWrites=true&w=majority').then(()=>{
    app.listen(PORT,()=>{
        console.log("Your application is running on ",PORT)
    })
})











