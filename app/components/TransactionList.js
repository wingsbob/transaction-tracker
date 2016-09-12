const React = require('react');
const PropTypes = React.PropTypes;
const BaseComponent = require('./BaseComponent');
const Transaction = require('./Transaction');

class TransactionList extends BaseComponent {
  render() {
    return (
      <ul>
      {this.props.transactions.map(transaction =>
        <Transaction
          key={transaction.id}
          id={transaction.id}
          description={transaction.description}
          amount={transaction.amount}
          transactionType={transaction.transactionType}
          onremove={this.props.onremove}
          onClick={() => this.props.onTransactionClick(transaction.id)}
        />
      )}
    </ul>
    );
  }
}

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    transactionType: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired
  })),
  onTransactionClick: PropTypes.func.isRequired,
  onremove: PropTypes.func.isRequired
};

module.exports = TransactionList;
