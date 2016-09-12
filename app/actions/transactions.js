const addTransaction = ({description, amount, transactionType}) => ({
  type: 'ADD_TRANSACTION',
  description,
  amount,
  transactionType
});

const removeTransaction = (id) => ({
  type: 'REMOVE_TRANSACTION',
  id
});

module.exports = {addTransaction, removeTransaction};
