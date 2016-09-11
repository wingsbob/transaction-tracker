module.exports = (state = [], action) => {
  if (action.type === 'ADD_TRANSACTION_TYPE')
    state = state.concat([action.transactionType]);

  return state;
};
