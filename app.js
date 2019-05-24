import express from 'express';
import path from 'path';

import nunjucks from 'nunjucks';

import config from './config';

const app = express();

// Static
app.use('/', express.static(__dirname + '/build/'));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Data

console.log("Hello!");

// API

app.get('/', (req, res) => {
  res.render(path.resolve(__dirname + 'sandbox_page.html'));
});

app.get('/albums', (req, res) => {
  res.json(names);
});

app.get('/albums/album:id', (req, res, next) => {
  const id = Number(req.params.id);

  try {
    const data = Object.values(albums[id - 1]);
    res.json(data);
  } catch(err) {
    console.error(err);
    next();
  }
});

// Others
app.use(function(req, res) {
    res.status(404);
    res.send('Page not found!!!');
});

// Server
app.listen(config.PORT, () => {
  console.log('App listening on port ' + config.PORT + '!');
});