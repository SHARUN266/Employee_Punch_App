const express = require("express");
const app = express.Router();
const UserModel = require("../Model/User.Schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

// Login user
app.post("/login", async (req, res) => {
  const { name, password } = req.body;
  try {
    let user = await UserModel.findOne({ name });
    if (!user) return res.status(401).send("Invalid username");
    const passwordsMatch = await bcrypt.compare(password, user.password);
    if (!passwordsMatch)
      return res.status(401).send("Invalid password");
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
    
    res.status(200).json({userToken:token,user:user});
  } catch (e) {
    res.status(505).send(e.message);
  }
});

module.exports = app;
