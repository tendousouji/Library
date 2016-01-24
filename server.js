var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

var db = require('./config/db');

mongoose.connect(db.url);

global.__base = __dirname + '/';

var port = 3000;

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/img', 'favicon.png')));
// app.use(logger('dev'));s
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res){
  res.sendfile('./public/views/index.html');
});

app.listen(port, function(){
  console.log("SERVER IS RUNNING ON PORT " + port);
});

module.exports = app;
