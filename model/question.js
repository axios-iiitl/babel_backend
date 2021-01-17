const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  body: {
    type: String,
  },
});

const question = mongoose.model("Question", questionSchema);
module.exports = question;
