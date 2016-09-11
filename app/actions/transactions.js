const addTransaction = (name) => ({
  type: 'ADD_TRANSACTION',
  name
});

const removeTransaction = (id) => ({
  type: 'REMOVE_TRANSACTION',
  id
});

module.exports = {addTransaction, removeTransaction};
