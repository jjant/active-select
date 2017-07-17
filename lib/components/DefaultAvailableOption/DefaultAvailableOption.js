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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  borderBottom: '1px solid lightgray',
  height: '30px',
  lineHeight: '30px',
  paddingLeft: '10px',
  fontSize: '12px',
  textAlign: 'left',
  ':hover': {
    background: '#ECEFF4'
  }
};

var DefaultAvailableOption = function DefaultAvailableOption(_ref) {
  var option = _ref.option,
      selectOption = _ref.selectOption;
  return _react2.default.createElement(
    'div',
    { style: style, onClick: selectOption },
    option.label
  );
};

DefaultAvailableOption.propTypes = {
  option: _propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.string.isRequired
  }).isRequired,
  selectOption: _propTypes2.default.func.isRequired
};

exports.default = (0, _radium2.default)(DefaultAvailableOption);