const express = require('express');
const { User } = require('../models');

const router = express.Router();

//Other routes can be added as needed.
router.post('/', async (req, res) => {
  try {
    req.body.messageIndex = 0;
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Error creating user' });
  }
});

module.exports = router;
