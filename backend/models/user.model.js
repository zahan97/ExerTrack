const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname: { type: String, required: true, unique: true, trim: true, minlength: 2 },
    lname: { type: String, required: true, unique: true, trim: true, minlength: 2 },
    username: { type: String, required: true, unique: true, trim: true, minlength: 3 },
    password: { type: String, required: true, unique: true},
    gender: { type: String, required: true},
    age: { type: String, required: true, maxlength: 2},
    weight: { type: String, required: true, maxlength: 3},
    height: { type: String, required: true, maxlength: 3},
    }, 
  {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;