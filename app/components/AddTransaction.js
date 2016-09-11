const React = require('react');
const {connect} = require('react-redux');
const {addTransaction} = require('../actions/transactions');

module.exports = connect()(({dispatch}) => {
  var input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (input.value.trim()) {
          dispatch(addTransaction(input.value));
          input.value = '';
        }
      }}>
        <input ref={node => input = node}/>
        <button type="submit">
          Add transaction
        </button>
      </form>
    </div>
  );
});
