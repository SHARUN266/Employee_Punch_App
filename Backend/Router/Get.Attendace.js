const express = require("express");
const app = express.Router();
const Punch=require("../Model/Punch.Schema")


app.post("/",async(req,res)=>{
   
    try{
        let attendanceList=await Punch.find({userId:req.body._id})
        
        res.status(200).send(attendanceList)

    }catch(e){
        res.status(505).send(e)
    }
})

module.exports=app