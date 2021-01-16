const mongoose = require("mongoose");
require("../helper/init_mongoose");
const Schema = mongoose.Schema;
const pollSchema = new Schema({
  user: {
    type: mongoose.Schema.Type.ObjectId,
    ref: "User",
  },
  nsfw: {
    type: Boolean,
    required: true,
  },
  question: {
    type: mongoose.Schema.Type.ObjectId,
    ref: "Question",
  },
  option: [
    {
      type: mongoose.Schema.Type.ObjectId,
      ref: "Option",
    },
  ],
});

const poll = mongoose.model("Poll", pollSchema);
module.exports = poll;
