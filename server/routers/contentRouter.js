/*eslint-disable new-cap*/
const express = require('express');
const contentRouter = express.Router();
const path = require('path');

contentRouter.get('/:fileName', (req, res) =>
  res.sendFile('build/' + req.params.fileName, {
    root: path.join(__dirname, '../..')
  }, (err) => {
    if (err) res.status(err.status).end();
  })
);

module.exports = contentRouter;
