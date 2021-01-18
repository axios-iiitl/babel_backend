const createError = require("http-errors");
const User = require("../model/user");
const Post = require("../model/post");
module.exports = {
  showuserdetails: async (req, res, next) => {
    try {
      const { aud } = req.payload;
      User.findOne({ aud }).then((currentuser) => {
        if (currentuser) {
          res.send({ user: currentuser });
        } else {
          next(createError.Unauthorized());
        }
      });
    } catch (error) {
      console.log(error);
      next(createError(error));
    }
  },
  adduserdetails: async (req, res, next) => {
    try {
      const { aud } = req.payload;
      let { name, email, picture, displayName, role } = req.body;
      if (role == null) role = "member";
      User.findOne({ aud }).then((currentuser) => {
        if (currentuser) {
          next(createError.Conflict());
        } else {
          new User({
            name,
            email,
            displayPicture: picture,
            displayName,
            authenticationid: aud,
            role,
          })
            .save()
            .then(async (newuser) => {
              console.log(`New Babel Board ${role} added : ${newuser}`);
              res.send("User Added Successfully :) ");
            })
            .catch((err) => {
              next(createError.Conflict());
            });
        }
      });
    } catch (error) {
      console.log(error);
      next(createError.InternalServerError());
    }
  },
  showpost: async (req, res, next) => {
    try {
      Post.find()
        .sort({ date: -1 })
        .limit(15)
        .exec(function (err, posts) {
          if (err) next(createError.InternalServerError());
          res.send(posts);
        });
    } catch (error) {
      console.log(error.message);
      next(createError.InternalServerError());
    }
  },
  addpost: async (req, res, next) => {
    try {
      let { body, nsfw } = req.body;
      if (nsfw == null) nsfw = false;
      new Post({
        body,
        user: req.payload.aud,
        nsfw,
        upvotecount: 0,
        downvotecount: 0,
      })
        .save()
        .then(async (newpost) => {
          console.log(`New Post added : ${newpost}`);
          res.send("Posted Successfully :) ");
        })
        .catch((err) => {
          next(createError.Conflict());
        });
    } catch (error) {
      console.log(error.message);
      next(createError.InternalServerError());
    }
  },
  updatepost: async (req, res, next) => {
    try {
      const { aud } = req.payload;
      let { postId, upcount, comment, replyto } = req.body;
      if (upcount == null) {
        if (replyto == null) replyto = "owner";
        new Comment({
          body: comment,
          userid: aud,
          replyto,
        })
          .save()
          .then((newcomment) => {
            Post.findByIdAndUpdate(
              postId,
              { $inc: { commentscount: 1 }, $push: { comments: newcomment._id} },
              { new: true }
            ).exec((err, result) => {
              if (err) next(createError.InternalServerError());
              console.log(result);
              res.send("Comment Added Successfully :)");
            });
          });
      } else if (upcount == 1)
        Post.findByIdAndUpdate(
          postId,
          { $inc: { upvotecount: upcount }, $push: { upvotedusers: aud } },
          { new: true }
        ).exec((err, result) => {
          if (err) next(createError.InternalServerError());
          console.log(result);
          res.send("Upvoted Successfully :)");
        });
      else if (upcount == -1)
        Post.findByIdAndUpdate(
          postId,
          {
            $inc: { downvotecount: -1 * upcount },
            $push: { downvotedusers: aud },
          },
          { new: true }
        ).exec((err, result) => {
          if (err) next(createError.InternalServerError());
          console.log(result);
          res.send("Downvoted Successfully :)");
        });
    } catch (error) {
      console.log(error.message);
      next(createError.InternalServerError());
    }
  },
  showpoll: async (req, res, next) => {
    try {
      // give the posts back to the client
      console.log("show posts");
    } catch (error) {
      console.log(error.message);
      next(createError.InternalServerError());
    }
  },
  addpoll: async (req, res, next) => {
    try {
      // add new post to the backend
      console.log(req.body);
    } catch (error) {
      console.log(error.message);
      next(createError.InternalServerError());
    }
  },
  showcomment: async (req, res, next) => {
    try {
      // give the comments back to the client
      console.log("show comments");
    } catch (error) {
      console.log(error.message);
      next(createError.InternalServerError());
    }
  },
};
