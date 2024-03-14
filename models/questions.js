const mongoose = require('mongoose');

const textSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
});

const TextModel = mongoose.model('TextModel', textSchema);

module.exports = TextModel;
