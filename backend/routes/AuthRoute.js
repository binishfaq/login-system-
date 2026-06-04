const express = require("express");
const router = express.Router();
const db = require("../db/db");

// REGISTER
router.post("/register", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password required",
    });
  }

  const checksql = "SELECT * FROM users WHERE email = ?";

  db.query(checksql, [email], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Database error",
      });
    }

    if (result.length > 0) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const insertsql =
      "INSERT INTO users (email, password) VALUES (?, ?)";

    db.query(insertsql, [email, password], (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Error Creating User",
        });
      }

      return res.json({
        success: true,
        message: "User Register Successfully",
      });
    });
  });
});

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email or password missing",
    });
  }

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Database error",
      });
    }

    if (result.length > 0) {
      return res.json({
        success: true,
        message: "Login Successful",
        user: result[0],
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }
  });
});

module.exports = router;