const React = require('react');
const AddTransaction = require('./AddTransaction');
const VisibleTransactionList = require('./VisibleTransactionList');

class App extends React.Component {
  render() {
    return (
      <div>
        <AddTransaction />
        <VisibleTransactionList />
      </div>
    );
  }
}

module.exports = App;
