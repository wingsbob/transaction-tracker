const React = require('react');

class TransactionType extends React.Component {
  render() {
    var selector;

    return (
      <select
        defaultValue="default"
        ref={node => selector = node}
        onChange={() => {
          if (selector.value === 'addNew')
            this.props.onRequestNewTransactionType();
        }}
      >
        {this.props.transactionTypes.map((transactionType, index) => (
          <option value={transactionType} key={'transaction-type-' + index}>
            {transactionType}
          </option>
        ))}
        <option value="default">Select the type of transaction</option>
        <option value="addNew">Add new transaction type</option>
      </select>
    );
  }
}

module.exports = TransactionType;
