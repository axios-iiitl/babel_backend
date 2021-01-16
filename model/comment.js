const mongoose = require("mongoose");
require("../helper/init_mongoose");
const Schema = mongoose.Schema;
const commentSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  replyto: {
    type: this
  },
  userid: {
    type: mongoose.Schema.Type.ObjectId,
    ref: "User",
  },
});

const comment = mongoose.model("Comment", commentSchema);
module.exports = comment;
