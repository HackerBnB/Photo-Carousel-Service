const express = require('express');
const routes = require('../db/router.js');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.set('port', process.env.PORT || 3004);

app.use(function(res, req, next) {
  console.log('welcome to airfec user');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.use('/api', routes);

app.get('/', function(req, res) {
  res.redirect('/rooms/1');
});

app.use(express.static('public/'));
app.use(express.static('client/dist'));

app.get('/rooms/roomID/:id', function(req, res) {
  const reactPath = path.join(__dirname, '../public/index.html');
  res.sendFile(reactPath);
});

app.get('/rooms/roomName/:name', function(req, res) {
  const reactPath = path.join(__dirname, '../public/index.html');
  res.sendFile(reactPath);
});

module.exports = app;
