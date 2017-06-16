var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');

var multipartMiddleware = multipart();

app.post('/editfules/add', multipartMiddleware, function (req, res) {
  console.log('method',req.method);
  console.log('body:',req.body);
  res.send('Hello World!');
});
app.get('/editfules/add', function (req, res) {
  console.log('methos',req.method);
  console.log('body:',req.body);
  res.send('Hello World!');
});

app.listen(7070, function () {
  console.log('Example app listening on port 7070!');
});/**
 * Created by taoym on 2017/6/16.
 */
