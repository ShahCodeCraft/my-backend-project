// routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const Event = require('../model/Event');

// Endpoint to handle tracking event
router.post('/track', async (req, res) => {
  try {
      console.log('Received data:', req.body); // Log the received data
      const eventData = req.body;
      const newEvent = new Event(eventData);
      await newEvent.save();
      res.status(200).send({ message: 'Event tracked successfully' });
  } catch (error) {
      console.error('Error tracking event:', error);
      res.status(500).send({ message: 'Error tracking event', error });
  }
});


module.exports = router;


module.exports = router;
