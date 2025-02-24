const mongoose = require('mongoose');

const initiativeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  date: Date,
  stats: [{
    icon: String,
    count: String,
    label: String
  }],
  order: Number
}, { timestamps: true });

module.exports = mongoose.model('Initiative', initiativeSchema); 