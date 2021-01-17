const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  upvotedusers: [
    {
      type: mongoose.Schema.Type.ObjectId,
      ref: "User",
    },
  ],
  user: {
    type: mongoose.Schema.Type.ObjectId,
    ref: "User",
  },
  nsfw: {
    type: Boolean,
    required:true
  },
  upvotecount: {
    type: Number,
  },
  downvotecount: {
    type: Number,
  },
  downvotedusers: [
    {
      type: mongoose.Schema.Type.ObjectId,
      ref: "User",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Type.ObjectId,
      ref: "Comments",
    },
  ],
});

const post = mongoose.model("Post", postSchema);
module.exports = post;
