const { Schema,  model } = require("mongoose");

const userSchema = Schema({
  name: { type: String },
  employee_id: { type: String,unique:true },
  mobile_number: { type: Number },
  emplyee_designation: { type: String},
  password: { type: String,unique:true },
});

const UserModel = model("user", userSchema);
module.exports = UserModel;
