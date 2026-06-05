// At the top of server.js
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/AuthRoute");
const connectDB = require("./db");        // <-- ADD THIS LINE

require("dotenv").config();

const app = express();

// Connect to MongoDB Atlas
connectDB();                              // <-- ADD THIS LINE

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});