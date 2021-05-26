const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  author: String,
  title: String,
  body: String,
  published_on: Date
});

mongoose.model('Content', ContentSchema);

module.exports = mongoose.model('Content');