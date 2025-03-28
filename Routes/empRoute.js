const express = require("express");
const { addEmployee, updateEmployee, deleteEmployee, GetEmployee } = require("../controllers/empCtrl");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { createUser } = require("../controllers/userController");
const router = express.Router();

router.post("/", authMiddleware, addEmployee,createUser);
router.put("/:employeeId", authMiddleware, updateEmployee);
router.delete("/:id", authMiddleware, deleteEmployee);
router.get("/" , GetEmployee);

module.exports = router;
