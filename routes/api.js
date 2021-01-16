const express = require("express");
const router = express.Router();
const { getuserdetails } = require("../Controller/auth.controller");



router
.get("/user",showuserdetails)
.post("/user", adduserdetails)


router
.get("/post",showposts)
.post("/post",addpost)

router
.get("/comment",showcomment)
.post("/comment",addcomment)




module.exports = router;