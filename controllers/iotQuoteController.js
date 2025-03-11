const IotQuote = require("../Modals/iotQuoteProductModel");

// Create a new quote request
exports.createIotQuote = async (req, res) => {
  try {
    const { name, email, phone, productName } = req.body;
    console.log(req.body)

    if (!name || !email || !phone || !productName) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newQuote = new IotQuote({ name, email, phone, productName });
    await newQuote.save();

    res.status(201).json({ message: "Quote request submitted successfully!", quote: newQuote });
  } catch (error) {
    console.error("Error submitting quote request:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getAllIotQuote = async (req, res) => {
    try {
      const products = await IotQuote.find(); // Fetch all products
      res.status(200).json(products); // Send response
    } catch (error) {
      res.status(500).json({ message: "Error fetching products", error: error.message });
    }
  };