// routes/joinCommunityRouter.js
const express = require("express");
const joinCommunityController = require("../controllers/joinCommunityController");

const router = express.Router();

router.post("/", joinCommunityController.createContact);

module.exports = router;
