var Book = require('../../model/book')

module.exports = function(app) {
  app.post('/api/book', function (req, res) {
    Book.find(function (err, books){
      if (err) 
        res.send(err);
      res.json(books);
    });
  });

}