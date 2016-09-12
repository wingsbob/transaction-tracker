const React = require('react');
const BaseComponent = require('./BaseComponent');
const PropTypes = React.PropTypes;

class Transaction extends BaseComponent {
  render() {
    return (
      <li id={'transaction-' + this.props.id}>
        <div>
          <span>
            {this.props.description}
          </span>
          <span>
            {this.props.amount}
          </span>
          <span>
            {this.props.transactionType}
          </span>
        </div>
        <button onClick={() => this.props.onremove(this.props.id)}>
          remove
        </button>
      </li>
    );
  }
}

Transaction.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  amount: PropTypes.string.isRequired,
  transactionType: PropTypes.string.isRequired,
  onremove: PropTypes.func.isRequired
};

module.exports = Transaction;
