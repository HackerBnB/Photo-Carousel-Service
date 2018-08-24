require('newrelic');
require('dotenv').config()
const express = require('express');
const routes = require('../db/router.js');
//const controller = require('./controller.js');
const model = require('./model.js');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const redis = require('redis');
// const cluster = require('cluster');
// const http = require('http');
// const numCPUs = require('os').cpus().length;
const parser = require('body-parser');
//http.globalAgent.maxSockets = 1000;

// const masterProcess = () => {
//   //console.log(`Master ${process.pid} is running`);

//   for (let i = 0; i < numCPUs; i++) {
//     //console.log(`Forking process number ${i}...`);
//     cluster.fork();
//   }
//   cluster.on('online', function(worker) {
//     //console.log('Worker ' + worker.process.pid + ' is online');
//   });

//   cluster.on('exit', function(worker, code, signal) {
//       //console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
//       //console.log('Starting a new worker');
//       cluster.fork();
//   });

//   // process.exit();
// };

// const childProcess = () => {
  //console.log(`Worker ${process.pid} started`);

  const port = process.env.PORT || 3004;
  const compression = require('compression');
  const app = express();
  app.use(compression())
  app.use(parser.json());
  app.use(parser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(morgan('dev'));
  app.set('port', process.env.PORT || 3004);

  const client = redis.createClient();

  app.use(function(res, req, next) {
    //console.log('welcome to airfec user');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
  });
  app.use(express.static('public/'));
  app.use(express.static('client/dist'));
  // app.use('/api', routes);
  app.get('/', function(req, res) {
    res.redirect('/rooms/roomID/1');
  });
  app.get('/rooms/roomID/:id', function(req, res) {
    const reactPath = path.join(__dirname, '../public/index.html');
    res.sendFile(reactPath);
  });
  app.get('/rooms/roomName/:name', function(req, res) {
    const reactPath = path.join(__dirname, '../public/index.html');
    res.sendFile(reactPath);
  });
  app.get('/loaderio-30a60a2c099bc565b94a01792e38a81f.txt', (req, res) => {
    const reactPath = path.join(__dirname, './loaderio-30a60a2c099bc565b94a01792e38a81f.txt');
    res.sendFile(reactPath);
  });
  app.get('/loaderio-438441fd51a84bb2bc6eb2d4d1049bcc.txt', (req, res) => {
    const reactPath = path.join(__dirname, './loaderio-438441fd51a84bb2bc6eb2d4d1049bcc.txt');
    res.sendFile(reactPath);
  });
  app.get('/api/rooms/roomID/:id/photos/', (req, res) => {
    const id = req.params.id;
    //console.log('ID', id);
    if (parseInt(id, 10)) {
      client.get('/api/rooms/roomID/' + id + '/photos', (err, results) => {
        if (results) {
          //console.log('Hit cache for roomID ' + id, results);
          res.send(results);
        } else {
          model.getRoomById(id, (results) => {
            if (results) {
              client.setex('/api/rooms/roomID/' + id + '/photos', 300, JSON.stringify(results));
              res.send(results);
            }
          });
        }
      });
    } else {
      res.end();
    }
  });
  app.get('/api/rooms/roomName/:name/photos/', (req, res) => {
    const name = req.params.name;
    //console.log('name is: ', name);
    if (name) {
      client.get('/api/rooms/roomName/' + name + '/photos', (err, results) => {
        if (results) {
          //console.log('Hit cache for roomName ' + name, results);
          res.send(results);
        } else {
          model.getRoomByName(name, (results) => {
            if (results) {
              client.setex('/api/rooms/roomName/' + name + '/photos', 300, JSON.stringify(results));
              res.send(results);
            }
          });
        }
      });
    } else {
      res.end();
    }
  });
  app.post('/api/rooms', (req, res) => {
    model.insertRoom(req.query.roomName, (results) => {
      res.send(results);
    });
  });
  app.post('/api/rooms/roomID/:id/photos/', (req, res) => {
    const id = req.params.id;
    const photoUrl = req.query.photoUrl;
    const photoDescription = req.query.photoDescription;
    model.insertPhoto(id, photoUrl, photoDescription, (results) => {
      res.status(201).send(results);
    })
  });

  app.listen(port, () => console.log(`Listening on port ${port}!`));
// };

// if (cluster.isMaster) {
//   masterProcess();
// } else {
//   childProcess();  
// }
