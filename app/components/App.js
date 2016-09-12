const React = require('react');
const BaseComponent = require('./BaseComponent');
const Header = require('./Header');
const VisibleTransactionList = require('./VisibleTransactionList');

class App extends BaseComponent {
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
