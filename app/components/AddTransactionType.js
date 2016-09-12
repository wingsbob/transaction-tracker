const React = require('react');
const BaseComponent = require('./BaseComponent');

class AddTransactionType extends BaseComponent {
  render() {
    var typeName;

    return this.props.newTransactionTypeNeeded ?
      (
      <form onSubmit={
        e => {
          e.preventDefault();
          if (typeName.value.trim())
            this.props.onNewTransactionType(typeName.value);
        }
      }>
        <label>Transaction type name</label>
        <input
          ref={node => typeName = node}
         />
      </form>
    ) : null;
  }
}

module.exports = AddTransactionType;
