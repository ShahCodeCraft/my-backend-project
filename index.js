const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Successfully...'))
.catch(err => console.error('Failed to connect to MongoDB', err));
// Basic route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Import and use the user routes
const Routes = require('./routes/user');
app.use('/users', Routes);


// Import and use the event routes
const eventRoutes = require('./routes/event');
app.use('/events', eventRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
