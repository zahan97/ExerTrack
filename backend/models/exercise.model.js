const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  username: {type: String},
  exe: { type: String, required: true },
  reps: { type: Number, required: true },
  sets: { type: Number, required: true },
  duration: { type: Number, required: true },
  
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;