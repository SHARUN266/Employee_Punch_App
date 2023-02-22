const express = require("express");
const app = express.Router();
const UserModel = require("../Model/User.Schema");

app.post("/user", async (req, res) => {
  const user = req.body;

  try {
    let user1 = new UserModel(user);
    await user1.save();
    res.status(200).send("Your account created successfully");
  } catch (e) {
    res.status(505).send(e.message);
  }
});
app.post("/login",async (req,res)=>{
  const {employee_id,password}=req.body
  try{
    let user=await UserModel.findOne({employee_id})
    if(password===user.password){
      res.status(200).send(user)
    }else{
      res.status(505).send("Email of password is wrong!")
    }

  }catch(e){
    res.status(505).send(e.message)
  }
})

module.exports = app;
