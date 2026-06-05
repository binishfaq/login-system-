const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://MERN-STACK:zain123@cluster0.d5cv4f9.mongodb.net/loginsystem");
    console.log("MongoDB Atlas Connected ✅");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;