const express = require("express");
const handleChat = require("./controller");

const router = express.Router();

router.post("/get-response", handleChat);

module.exports = router;
