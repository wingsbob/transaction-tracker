const {connect} = require('react-redux');
const TransactionList = require('./TransactionList');
const {removeTransaction} = require('../actions/transactions');

const getVisibleTransactions = (transactions, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return transactions;
    case 'SHOW_COMPLETED':
      return transactions.filter(transaction => transaction.completed);
    case 'SHOW_ACTIVE':
      return transactions.filter(transaction => !transaction.completed);
  }
};

const mapStateToProps = (state) => ({
  transactions: getVisibleTransactions(state.transactions, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
  onTransactionClick: dispatch,
  onremove: (id) => dispatch(removeTransaction(id))
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(TransactionList);
