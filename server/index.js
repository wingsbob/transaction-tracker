const argv = require('yargs').argv;
const express = require('express');
const app = express();
const apiRouter = require('./routers/apiRouter');
const contentRouter = require('./routers/contentRouter');

app.use('/content', contentRouter);
app.use('/api', apiRouter);
app.get('/', (req, res) => res.redirect('/content/index.html'));
app.listen(argv.port || 3000);
