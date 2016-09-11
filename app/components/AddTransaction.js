const React = require('react');
const TransactionType = require('./TransactionType');

class AddTransaction extends React.Component {
  render() {
    var name, amount, type;
    const contentIsValid = () =>
      name.value.trim() &&
      amount.value.trim() &&
      type.value !== 'addNew' &&
      type.value !== 'default';

    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          if (contentIsValid()) {
            this.props.addTransaction({
              name: name.value,
              amount: amount.value,
              type: type.value
            });
            name.value = '';
            amount.value = '';
          }
        }}>
          <label>transaction name</label>
          <input ref={node => name = node}/>
          <label>transaction amount</label>
          <input ref={node => amount = node} />
          <TransactionType
            ref={node => type = node}
            onRequestNewTransactionType={this.props.onRequestNewTransactionType}
            transactionTypes={this.props.transactionTypes}
          />
          <button type="submit">
            Add transaction
          </button>
        </form>
      </div>
    );
  }
}

module.exports = AddTransaction;
