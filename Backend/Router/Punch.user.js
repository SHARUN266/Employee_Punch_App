const express = require("express");
const app = express.Router();
const punchModel = require("../Model/Punch.Schema");
const UserModel = require("../Model/User.Schema");
app.post("/", async (req, res) => {
  const object = req.body;
  try {
    UserModel.findOne({ name: object?.name }, function (err, user) {
      if (err) {
        res.status(505).send("Somthing went wrong...");
        return;
      }
      if (!user) {
        res.status(505).send("user not found");
        return;
      }
      const punch = new punchModel({
        name: object.name,
        userId: user._id,
        punchIn: object.punchIn,
        punchOut: object.punchOut,
      });
      punch.save((err, punch) => {
        if (err) {
          res.status(505).send("Somthing went wrong with punch ");
          return;
        }
        res.status(200).send(punch);
      });
    });
  } catch (e) {
    res.status(505).send(e);
  }
});

module.exports = app;
