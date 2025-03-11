const {
  createIotQuote,
  getAllIotQuote,
} = require("../controllers/iotQuoteController");
const express = require("express");

const router = express.Router();

router.get("/all", getAllIotQuote);
router.post("/iot/quote/products", createIotQuote);

module.exports = router;
