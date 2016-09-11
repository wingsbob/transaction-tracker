const express = require('express');

const argv = require('yargs').argv;
const config = require('../config.json');
const https = require('https');
const http = require('http');
const fs = require('fs');
const app = express();
const apiRouter = require('./routers/apiRouter');
const contentRouter = require('./routers/contentRouter');

app.use('/content', contentRouter);
app.use('/api', apiRouter);
app.get('/', (req, res) => res.redirect('/content/index.html'));

if (config.useHTTPS) {
  const {pfx, key, cert} = Object.assign({}, config.httpsOptions); //Object.assign guarantees we get an object

  http.createServer(app).listen(argv.port || config.port || 3000);
  https.createServer({
    pfx: pfx ? fs.readFileSync(pfx) : null,
    key: pfx ? null : fs.readFileSync(key),
    cert: pfx ? null : fs.readFileSync(cert)
  }, app).listen(argv.port || config.port || 3000);
} else
  app.listen(argv.port || config.port || 3000);
