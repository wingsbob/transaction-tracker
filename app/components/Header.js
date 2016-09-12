const React = require('react');
const {connect} = require('react-redux');
const BaseComponent = require('./BaseComponent');
const AddTransaction = require('./AddTransaction');
const AddTransactionType = require('./AddTransactionType');
const {addTransaction} = require('../actions/transactions');
const {
  newTypeRequest,
  addType,
  newTypeComplete
} = require('../actions/transactionTypes');

const mapStateToProps = (state) => ({
  transactionTypes: state.transactionTypes,
  newTransactionTypeNeeded: state.newTransactionTypeNeeded
});

const mapDispatchToProps = (dispatch) => ({
  onRequestNewTransactionType: () => dispatch(newTypeRequest()),
  onNewTransaction: (details) => dispatch(addTransaction(details)),
  onNewTransactionType: (transactionTypeName) => {
    dispatch(addType(transactionTypeName));
    dispatch(newTypeComplete());
  }
});

class Header extends BaseComponent {
  render() {
    return (
      <div>
        <AddTransaction
          onRequestNewTransactionType={this.props.onRequestNewTransactionType}
          transactionTypes={this.props.transactionTypes}
          onNewTransaction={this.props.onNewTransaction}
        />
        <AddTransactionType
          newTransactionTypeNeeded={this.props.newTransactionTypeNeeded}
          onNewTransactionType={this.props.onNewTransactionType}
        />
      </div>
    );
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Header);
