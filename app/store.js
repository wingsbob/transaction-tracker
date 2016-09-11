const {combineReducers, createStore} = require('redux');
const transactions = require('./reducers/transactions');
const visibilityFilter = require('./reducers/visibilityFilter');

module.exports = createStore(combineReducers({transactions, visibilityFilter}));
