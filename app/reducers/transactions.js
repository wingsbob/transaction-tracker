const _ = require('lodash');

module.exports = (state = [], action) => {
  if (action.type === 'ADD_TRANSACTION')
    state = state.concat([Object.assign(_.pick(action, ['description', 'amount', 'transactionType']), {
      id: state.length
    })]);
  else if (action.type === 'REMOVE_TRANSACTION')
    state = state.filter(transaction => transaction.id !== action.id);
  else if (action.type === 'UPDATE_TRANSACTION')
    state = state.map(transaction =>
      transaction.id === action.id ?
      Object.assign({}, transaction, _.pick(action, ['description', 'amount', 'transactionType'])) :
      transaction
    );

  return state;
};
