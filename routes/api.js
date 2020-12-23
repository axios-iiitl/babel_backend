const express = require("express");
const router = express.Router();
const { getuserdetails } = require("../Controller/auth.controller");
router.post("/user", getuserdetails);
module.exports = router;