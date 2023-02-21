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

module.exports = app;
