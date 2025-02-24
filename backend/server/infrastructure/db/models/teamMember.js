const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
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
  socialLinks: {
    linkedin: String,
    twitter: String,
    github: String
  },
  department: {
    type: String,
    required: true
  },
  order: Number
}, { timestamps: true });

module.exports = mongoose.model('TeamMember', teamMemberSchema); 