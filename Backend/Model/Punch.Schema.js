const { Schema, model } = require("mongoose");


const punchSchema =new  Schema({
  name: { type: String, unique: true },
  userId: { type: Schema.Types.ObjectId, ref: "users" },
  punchIn: { type: String },
  punchOut: { type: String },
  
},
{
  timestamps:true
});

const punchModel = model("punch", punchSchema);
module.exports = punchModel;
