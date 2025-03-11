const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { addFollowUP, updateFollowUP, deleteFollowUP } = require("../controllers/followupCtrl");
const router = express.Router();

router.post("/", authMiddleware, addFollowUP,);
router.put("/:_id", authMiddleware, updateFollowUP);
router.delete("/:id", authMiddleware, deleteFollowUP);

module.exports = router;
