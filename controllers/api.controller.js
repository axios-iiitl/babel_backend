const createError = require("http-errors");

module.exports = {
  showuserdetails: async (req, res, next) => {
    try {
      // give the user back to the client
      consolw.log("show users");
    } catch (error) {
      console.log(error.message);
      next(createError(error));
    }
  },
  adduserdetails: async (req, res, next) => {
    try {
      // add new user to the client
      consolw.log(req.body);
    } catch (error) {
      console.log(error.message);
      next(createError(error));
    }
  },
  showpost: async (req, res, next) => {
    try {
      // give the posts back to the client
      consolw.log("show posts");
    } catch (error) {
      console.log(error.message);
      next(createError(error));
    }
  },
  addpost: async (req, res, next) => {
    try {
      // add new post to the backend
      consolw.log(req.body);
    } catch (error) {
      console.log(error.message);
      next(createError(error));
    }
  },
  showcomment: async (req, res, next) => {
    try {
      // give the comments back to the client
      consolw.log("show comments");
    } catch (error) {
      console.log(error.message);
      next(createError(error));
    }
  },
  addcomment: async (req, res, next) => {
    try {
      // add new comment to the backend
      consolw.log(req.body);
    } catch (error) {
      console.log(error.message);
      next(createError(error));
    }
  },
};
