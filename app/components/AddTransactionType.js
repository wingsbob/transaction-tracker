const React = require('react');

class AddTransactionType extends React.Component {
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
