const express=require('express')
const app=express()
const mongoose=require('mongoose');
const cors=require('cors')
require('dotenv').config();
app.use(express.json())
const UserRouter=require("./Router/User.SignUp")
const PunchEmployee=require("./Router/Punch.user")
const PORT=3000||process.env.PORT
app.use(cors())
app.use("/signup",UserRouter)
app.use("/punch",PunchEmployee)

mongoose.connect('mongodb+srv://sharun:123@atlascluster.qwa1fxi.mongodb.net/EmployeeAPp?retryWrites=true&w=majority').then(()=>{
    app.listen(PORT,()=>{
        console.log("Your application is running on ",PORT)
    })
})











