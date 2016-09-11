const newTransactionTypeNeeded = (state = false, action) => {
  if (action.type === 'NEW_TRANSACTION_TYPE_REQUESTED') return true;
  if (action.type === 'NEW_TRANSACTION_TYPE_COMPLETE') return false;

  return state;
};

module.exports = newTransactionTypeNeeded;
