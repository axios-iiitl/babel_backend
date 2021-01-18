const mongoose = require("mongoose");
const User = require('./user');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
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
  upvotedusers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      unique:true
    },
  ],
  downvotedusers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  commentscount:{
    type:Number
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comments",
    },
  ],
});

const post = mongoose.model("Post", postSchema);
module.exports = post;
