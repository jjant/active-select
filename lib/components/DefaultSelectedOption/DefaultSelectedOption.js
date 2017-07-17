'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _close = require('./assets/close.svg');

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  container: {
    border: '1px solid #36558F',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '12px',
    padding: '5px 0 5px 10px',
    borderRadius: '3px',
    background: '#ECEFF4',
    color: '#23375C',
    position: 'relative',
    height: '30px',
    margin: '5px 0 0 5px',
    userSelect: 'none',
    cursor: 'default'
  },
  separator: {
    borderRight: '1px solid #36558F',
    right: '29px',
    height: '29px',
    position: 'absolute'
  },
  closeButton: {
    cursor: 'pointer',
    padding: '10px',
    width: '30px',
    height: '30px',
    marginLeft: '20px',
    ':hover': {
      opacity: '0.5',
      background: 'rgba(35, 55, 92, 0.3)'
    }
  }
};

var DefaultSelectedOption = function DefaultSelectedOption(_ref) {
  var option = _ref.option,
      unselectOption = _ref.unselectOption,
      style = _ref.style;
  return _react2.default.createElement(
    'div',
    { style: [styles.container, style] },
    _react2.default.createElement(
      'span',
      null,
      option.label
    ),
    _react2.default.createElement('span', { style: styles.separator }),
    _react2.default.createElement('img', { src: _close2.default, style: styles.closeButton, onClick: unselectOption, alt: 'Unselect option' })
  );
};

DefaultSelectedOption.propTypes = {
  option: _propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.string.isRequired
  }).isRequired,
  unselectOption: _propTypes2.default.func.isRequired,
  style: _propTypes2.default.shape()
};

DefaultSelectedOption.defaultProps = {
  style: {}
};

exports.default = (0, _radium2.default)(DefaultSelectedOption);