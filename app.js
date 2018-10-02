var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const pach = require('path');
const staticAsset = require('static-asset');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(staticAsset(pach.join(__dirname, 'public')));
app.use(express.static(pach.join(__dirname, 'public')));
app.use(
  '/javascripts',
  express.static(pach.join(__dirname, 'node_modules', 'jquery', 'dist'))
);

app.get('/', function(req, res) {
  res.render('index');
});

module.exports = app;
