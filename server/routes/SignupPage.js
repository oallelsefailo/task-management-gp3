const express = require("express");
const router = express.Router();
const SignUpSchemas = require("../models/signUpSchema");

router.post("/", async (req, res) => {
    try {
      const { villainName, email, password } = req.body;
  
      const signUpData = {
        villainName,
        email,
        password
      };

      const newSignUp = new SignUpSchemas.Signup(signUpData);
      await newSignUp.save();
  
      res.status(201).json({ message: '${villainName} has signed up.' });
    } catch (error) {
      console.error("Villain is having trouble signing up",error);
      res.status(500).json({ error: "Error" });
    }
  });

  module.exports = router;