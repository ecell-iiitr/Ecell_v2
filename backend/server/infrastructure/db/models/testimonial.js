const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  order: Number
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema); 