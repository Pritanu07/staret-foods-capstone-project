// before rum
//npm install express

// to run 
// npm start

'use strict';

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('src'));

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const OS = require('os');
const ENV = 'DEV';


// App
//const app = express();
app.get('/', (req, res) => {
  res.statusCode = 200;
  //const msg = 'Hello from Node 4!';
  //res.send(msg);
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

/*app.get('/test', (req, res) => {
  res.statusCode = 200;
  const msg = 'Hello from /test Node!';
  res.send(msg);
});*/

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);