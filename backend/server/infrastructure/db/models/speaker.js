const mongoose = require('mongoose');

const speakerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  testimonial: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Speaker', speakerSchema); 