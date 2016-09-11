const _ = require('lodash');
const argv = Object.assign({
  loggers: 'file,console',
  filename: 'server.log'
}, _.pick(require('yargs').argv, []));
const loggerOptions = {
  filename: argv.filename
};
const winston = require('winston');
const logger = new (require('winston')).Logger({
  transports: argv.loggers.split(',')
    .map(loggerType => new winston.transports[_.capitalize(loggerType)](loggerOptions))
});

module.exports = logger;
