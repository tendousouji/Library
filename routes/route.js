var main = require('./api/main');

module.exports = function(app) {

  main(app);

  app.get('/', function (req, res){
    res.sendfile('./public/views/index.html');
  });

}