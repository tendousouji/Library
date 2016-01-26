var mongoose = require('mongoose');

module.exports = mongoose.model('Book', {
  title: {type: String},
  description: {type: String}
}, 'books');