const React = require('react');
const Header = require('./Header');
const VisibleTransactionList = require('./VisibleTransactionList');

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <VisibleTransactionList />
      </div>
    );
  }
}

module.exports = App;
