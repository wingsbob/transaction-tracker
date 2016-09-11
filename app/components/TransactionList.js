const React = require('react');
const PropTypes = React.PropTypes;
const Transaction = require('./Transaction');

const TransactionList = ({transactions, onTransactionClick, onremove}) => (
  <ul>
    {transactions.map(transaction =>
      <Transaction
        key={transaction.id}
        {...transaction}
        onremove={onremove}
        onClick={() => onTransactionClick(transaction.id)}
      />
    )}
  </ul>
);

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })),
  onTransactionClick: PropTypes.func.isRequired,
  onremove: PropTypes.func.isRequired
};

module.exports = TransactionList;
