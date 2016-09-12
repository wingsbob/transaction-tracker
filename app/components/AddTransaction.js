const React = require('react');
const BaseComponent = require('./BaseComponent');
const TypeSelector = require('./TypeSelector');

class AddTransaction extends BaseComponent {
  render() {
    var description, amount, type;
    const contentIsValid = () =>
      description.value.trim() &&
      amount.value.trim() &&
      type.value !== 'addNew' &&
      type.value !== 'default';

    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          if (contentIsValid()) {
            this.props.onNewTransaction({
              description: description.value,
              amount: amount.value,
              transactionType: type.value
            });
            description.value = '';
            amount.value = '';
          }
        }}>
          <label>transaction description</label>
          <input ref={node => description = node}/>
          <label>transaction amount</label>
          <input ref={node => amount = node} />
          <TypeSelector
            selectorType="transaction"
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
