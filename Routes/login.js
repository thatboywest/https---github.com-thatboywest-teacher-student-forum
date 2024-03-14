const express = require('express');
const router = express.Router();
const User = require('../models/signup'); 


router.post('/', async (req, res) => {
    const { id, password } = req.body;
  
    try {
      const user = await User.findOne({ id, password });
  
      if (!user) {
        res.status(401).json({ message: 'Invalid credentials' });
      } else {
        res.status(200).json({ message: 'Login successful', user });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  module.exports = router;