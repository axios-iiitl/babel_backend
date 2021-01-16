const mongoose = require("mongoose");
require("../helper/init_mongoose");
const Schema = mongoose.Schema;
const optionchema = new Schema({
  question: {
    type: mongoose.Schema.Type.ObjectId,
    ref: "Question",
  },
  body: {
    type: String,
  },
  response: {
    type: Number,
  },
  user: [
    {
      type: mongoose.Schema.Type.ObjectId,
      ref: "User",
    },
  ],
});

const option = mongoose.model("Option", optionchema);
module.exports = option;
