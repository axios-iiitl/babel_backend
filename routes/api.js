const express = require("express");
const router = express.Router();
const api = require("../controllers/api.controller");
const { verifyAccessToken } = require("../helper/jwt_helper");


router
  .get("/user", verifyAccessToken, api.showuserdetails)
  .post("/user", verifyAccessToken, api.adduserdetails);

router
  .get("/post", verifyAccessToken, api.showpost)
  .post("/post", verifyAccessToken, api.addpost);

router
  .get("/post", verifyAccessToken, api.showpoll)
  .post("/post", verifyAccessToken, api.addpoll);

router
  .get("/comment", verifyAccessToken, api.showcomment)

module.exports = router;
