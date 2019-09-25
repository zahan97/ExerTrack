const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname: { type: String, required: true, trim: true},
    lname: { type: String, required: true, trim: true},
    username: { type: String, required: true, unique: true, trim: true},
    password: { type: String, required: true, unique: true},
    gender: { type: String, required: true},
    age: { type: String, required: true},
    weight: { type: String, required: true},
    height: { type: String, required: true},
    }, 
  {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;