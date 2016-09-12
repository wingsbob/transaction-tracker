const React = require('react');
const PropTypes = React.PropTypes;
const BaseComponent = require('./BaseComponent');

class TypeSelector extends BaseComponent {
  render() {
    var selector;

    return (
      <select
        defaultValue="default"
        ref={node => selector = node}
        onChange={() => {
          if (selector.value === 'addNew')
            this.props.onRequestNewTransactionType();
          else
            this.value = selector.value;
        }}
      >
        {this.props.transactionTypes.map((transactionType, index) => (
          <option value={transactionType} key={this.props.selectorType + '-type-' + index}>
            {transactionType}
          </option>
        ))}
        <option value="default">Select the type of {this.props.selectorType}</option>
        <option value="addNew">Add new {this.props.selectorType} type</option>
      </select>
    );
  }
}

TypeSelector.propTypes = {
  selectorType: PropTypes.string.isRequired,
  onRequestNewTransactionType: PropTypes.func.isRequired,
  transactionTypes: PropTypes.arrayOf(PropTypes.string)
};

module.exports = TypeSelector;
