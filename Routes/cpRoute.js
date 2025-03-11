const express = require("express");
const { addCP, updateCP, deleteCP } = require("../controllers/cpCtrl");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { createUser } = require("../controllers/userController");
const router = express.Router();

router.post("/", authMiddleware, addCP,createUser);
router.put("/:CPId", authMiddleware, updateCP);
router.delete("/:id", authMiddleware, deleteCP);

module.exports = router;
