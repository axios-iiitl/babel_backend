const express = require("express");
const router = express.Router();
const api = require("../controllers/api.controller");



router
.get("/user",api.showuserdetails)
.post("/user", api.adduserdetails)


router
.get("/post",api.showpost)
.post("/post",api.addpost)

router
.get("/comment",api.showcomment)
.post("/comment",api.addcomment)




module.exports = router;