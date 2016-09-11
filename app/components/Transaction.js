const React = require('react');
const PropTypes = React.PropTypes;

class Transaction extends React.Component {
  render() {
    return (
      <li id={'transaction-' + this.props.id}>
        <div>
          {this.props.name}
        </div>
        <button onClick={() => this.props.onremove(this.props.id)}>
          remove
        </button>
      </li>
    );
  }
}

Transaction.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onremove: PropTypes.func.isRequired
};

module.exports = Transaction;
