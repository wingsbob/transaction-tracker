const addTransaction = ({name, amount, transactionType}) => ({
  type: 'ADD_TRANSACTION',
  name,
  amount,
  transactionType
});

const removeTransaction = (id) => ({
  type: 'REMOVE_TRANSACTION',
  id
});

module.exports = {addTransaction, removeTransaction};
