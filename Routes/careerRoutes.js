const express = require("express");
const {
  CareerDetail,
  GetCareerDetail,
  DeleteCareer,
} = require("../controllers/careerController");

const router = express.Router();

router.get("/", GetCareerDetail);
router.post("/", CareerDetail);
router.delete("/:id", DeleteCareer);

module.exports = router;
