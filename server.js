const path = require('path');
const express = require('express');

const app = express();

app.set('port', 3666);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/index.js', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.js'));
});

app.use('/lazy', express.static('node_modules/lazy-module-loader/'));
app.use('/lib', express.static('lib'));
app.use('/components', express.static('components'));
app.use('/reducers', express.static('reducers'));
app.use('/services', express.static('services'));
app.use('/styles', express.static('styles'));
app.use('/images', express.static('images'));
app.use('/audio', express.static('audio'));
app.use('/test', express.static('test'));

const server = app.listen(app.get('port'), () => {
  console.log('------------------------------------');
  console.log(' Running Rummikub App on port:', app.get('port'));
  console.log('------------------------------------');
});
