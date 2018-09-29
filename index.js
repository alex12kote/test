var express = require('express');
var app = express();
const bodyParser = require('body-parser');

const arr = ['hello', 'world', 'test'];
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
  res.render('index', { arr: arr });
});
app.get('/create', function(req, res) {
  res.render('create');
});
app.post('/create', function(req, res) {
  arr.push(req.body.text);
  res.redirect('/');
});
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
