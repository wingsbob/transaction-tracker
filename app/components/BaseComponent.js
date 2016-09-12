const {Component} = require('react');

module.exports = class BaseComponent extends Component {
  shouldComponentUpdate (nextProps) {
    return Object.keys(nextProps)
      .some(prop => nextProps[prop] !== this.props[prop]);
  }
};
