const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  role: {
    type: String,
  },
  email: {
    type: String,
    lowercase:true,
    trim: true,
    required: true
  },
  displayPicture: {
    type: String,
  },
  displayName: {
    type: String,
    trim: true,
  },
  authenticationid: {
    type: String,
    required:true,
    unique:true
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
