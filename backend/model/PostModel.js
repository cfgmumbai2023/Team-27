const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  classes: {
    type: Number,
  },
  isAccepted: {
    type: Boolean,
    default: false,
  },
});

const posts = mongoose.model('posts', postSchema);

module.exports = posts;