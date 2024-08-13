const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  company: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    // required: true,
    match: [/.+@.+\..+/, 'Please fill a valid email address']
  },
  firstName: {
    type: String,
    // required: true
  },
  lastName: {
    type: String,
    // required: true
  },
  message: {
    type: String,
    // required: true
  },
  phoneNumber: {
    type: String,
    // required: true,
    match: [/^\d{10}$/, 'Please fill a valid phone number with 10 digits']
  },


});

// module.exports = mongoose.model('Event', EventSchema);
module.exports = mongoose.model('User', userSchema);
