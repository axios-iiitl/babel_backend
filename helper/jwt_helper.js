const jwt = require("jsonwebtoken");
const createError = require("http-errors");
require("dotenv").config();

module.exports = {
  verifyAccessToken: (req, res, next) => {
    if (!req.headers["authorization"]) return next(createError.Unauthorized());
    const authHeader = req.headers["authorization"].split(" ");
    const token = authHeader[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
      if (err) {
        if (err.name === "JsonWebTokenError")
          return next(createError.Unauthorized());
        return next(createError.Unauthorized(err.message));
      }
      req.payload = payload;
      next();
    });
  }
};
