const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: {
    type: String,
    trim: true,
    required: true
  },
  role: {
    type: String,
    default: "member",
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  branch: {
    type: String,
    trim: true,
  },
  year: {
    type: String,
    trim: true,
  },
  rollNo: {
    type: String,
    trim: true,
    index: true,
    unique: true,
  },
  email: {
    type: String,
    lowercase:true,
    trim: true,
    required: true
  },
  displayPicture: {
    type: String,
    trim: true,
  },
});

const user = mongoose.model("User", userSchema);
module.exports = user;
