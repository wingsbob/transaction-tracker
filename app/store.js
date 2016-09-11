const {combineReducers, createStore} = require('redux');
const transactions = require('./reducers/transactions');
const transactionTypes = require('./reducers/transactionTypes');
const newTransactionTypeNeeded = require('./reducers/newTransactionTypeNeeded');
const visibilityFilter = require('./reducers/visibilityFilter');

module.exports = createStore(
  combineReducers({
    transactions,
    visibilityFilter,
    transactionTypes,
    newTransactionTypeNeeded
  })
);
