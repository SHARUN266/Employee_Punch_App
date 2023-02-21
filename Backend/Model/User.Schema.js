const { Schema,  model } = require("mongoose");

const userSchema = Schema({
  name: { type: String },
  employee_id: { type: String },
  mobile_number: { type: Number },
  emplyee_designation: { type: String, unique: true },
  password: { type: String },
});

const UserModel = model("user", userSchema);
module.exports = UserModel;
