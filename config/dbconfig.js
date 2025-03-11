const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.Mongo_url);
    console.log(
      "Database is connected Sucessfully"
    );
  } catch (error) {
    console.log("error in connectdb");
    console.log(`${error}`.bgdanger.white);
  }
};

module.exports = connectDb;




