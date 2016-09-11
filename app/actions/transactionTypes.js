const addType = (transactionType) => ({
  type: 'ADD_TRANSACTION_TYPE',
  transactionType
});

const newTypeRequest = () => ({
  type: 'NEW_TRANSACTION_TYPE_REQUESTED'
});
const newTypeComplete = () => ({
  type: 'NEW_TRANSACTION_TYPE_COMPLETE'
});

module.exports = {
  addType,
  newTypeRequest,
  newTypeComplete
};
