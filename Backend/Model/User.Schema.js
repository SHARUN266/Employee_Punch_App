const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new Schema({
  name: { type: String,unique:true },

  mobile_number: { type: Number },
  employee_designation: { type: String },
  password: { type: String },
},
{
  timestamps:true
});
userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});
const UserModel = model("user", userSchema);
module.exports = UserModel;
