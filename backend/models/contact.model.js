const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  username: { type: String, required: true, unique:true },
  email: { type: String, required: true, unique:true },
  uni: { type: String, required: true },
  time: { type: String, required: true },
}, {
  timestamps: true,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;