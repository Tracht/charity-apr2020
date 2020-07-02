var express = require("express");
var router = express.Router();
var HomepageController = require("../controllers/homepage");
var Member = require("../models/member");

router.get("/", HomepageController.Index);
router.post("/createMember", HomepageController.CreateMember(Member));
router.post("/deleteMember", HomepageController.DeleteMember(Member));
router.get('/members', HomepageController.Members(Member))

module.exports = router;
