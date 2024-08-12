// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).send('Contact saved successfully');
  } catch (err) {
    res.status(400).send('Error saving contact: ' + err.message);
  }
});

module.exports = router;
