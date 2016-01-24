var mongoose = require('mongoose');
// var schema = mongoose.Schema;

var Book = mongoose.model('Book', {
  title : {type: String, default: ''},
  description : {type: String, default: ''}
});

module.exports.getBooks = function(callback) {
  Book.find(callback).sort([['title', 'ascending']]);
}

module.exports.addBook = function(book, callback) {
  Book.create(book, callback);
}

module.exports.getBookById = function(id, callback) {
  Book.findById(id, callback);
}

module.exports.updateBook = function(id, callback) {
  Book.findByIdAndUpdate(id, callback);
}

module.exports.deleteBook = function(id, callback) {
  Book.findByIdAndRemove(id, callback);
}
