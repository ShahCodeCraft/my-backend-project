// // routes/userRoutes.js
// const express = require('express');
// const User = require('../model/schema');

// const router = express.Router();

// // CREATE a new user
// router.post('/data', async (req, res) => {
//   try {
//     const newUser = new User(req.body);
//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // READ all users
// router.get('/', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // READ a single user by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // UPDATE a user by ID
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!updatedUser) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     res.status(200).json(updatedUser);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // DELETE a user by ID
// router.delete('/:id', async (req, res) => {
//   try {
//     const deletedUser = await User.findByIdAndDelete(req.params.id);
//     if (!deletedUser) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     res.status(200).json({ message: 'User deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;

// module.exports = router;



// routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../model/schema');

// Endpoint to handle tracking event
router.post('/data', async (req, res) => {
  try {
      console.log('Received data:', req.body); // Log the received data
      const eventData = req.body;
      const newEvent = new User(eventData);
      await newEvent.save();
      res.status(200).send({ message: 'Event tracked successfully' });
  } catch (error) {
      console.error('Error tracking event:', error);
      res.status(500).send({ message: 'Error tracking event', error });
  }
});


module.exports = router;


module.exports = router;

