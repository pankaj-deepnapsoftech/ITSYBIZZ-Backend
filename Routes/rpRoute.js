const express = require("express");
const { addRp, updateRP, deleteRP } = require("../controllers/rpCtrl");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { createUser } = require("../controllers/userController");
const router = express.Router();

router.post("/", authMiddleware, addRp);
router.put("/:rpId", authMiddleware, updateRP);
router.delete("/:id", authMiddleware, deleteRP);

module.exports = router;
