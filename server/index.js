const argv = require('yargs').argv;
const express = require('express');
const app = express();
const apiRouter = require('./routers/apiRouter');
const contentRouter = require('./routers/contentRouter');

app.use('/content', contentRouter);
app.use('/api', apiRouter);
app.listen(argv.port || 3000);
