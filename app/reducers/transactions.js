module.exports = (state = [], action) => {
  if (action.type === 'ADD_TRANSACTION')
    state = state.concat([{name: action.name, id: state.length}]);
  else if (action.type === 'REMOVE_TRANSACTION')
    state = state.filter(transaction => transaction.id !== action.id);

  return state;
};
