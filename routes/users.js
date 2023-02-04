const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/lolopopow");

const userSchema = mongoose.Schema({
  username:String,
  password:String,
  photu:String,
  
  datesOffer:{
    type: Number,
    default:0
  },
  email:String,
  
})
module.exports = mongoose.model("users",userSchema);
