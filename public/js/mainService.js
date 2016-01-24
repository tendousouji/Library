var Book = require('../../models/Book.js');

BookService = (function(){
  findAll: function() {
    Book.getBooks(function(err, books){
      if (err) throw err;
      return books;
    });
  }
}());
