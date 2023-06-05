const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Notice = mongoose.model('Notice', noticeSchema)

module.exports = { Notice }