const React = require('react');
const {connect} = require('react-redux');
const AddTransaction = require('./AddTransaction');
const AddTransactionType = require('./AddTransactionType');
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
  onNewTransactionType: (transactionTypeName) => {
    dispatch(addType(transactionTypeName));
    dispatch(newTypeComplete());
  }
});

class Header extends React.Component {
  render() {
    return (
      <div>
        <AddTransaction
          onRequestNewTransactionType={this.props.onRequestNewTransactionType}
          transactionTypes={this.props.transactionTypes}
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
