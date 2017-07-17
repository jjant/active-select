'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Layout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Layout.__proto__ || Object.getPrototypeOf(Layout)).call.apply(_ref, [this].concat(args))), _this), _this.renderAvailableOptions = function () {
      var AvailableOption = _this.props.availableOptionComponent;
      var options = (0, _lodash.difference)(_this.props.availableOptions, _this.props.selectedOptions);
      return options.map(function (option) {
        return _react2.default.createElement(AvailableOption, {
          option: option,
          selectOption: function selectOption() {
            return _this.props.selectOption(option);
          },
          key: option.value
        });
      });
    }, _this.renderSelectedOptions = function () {
      var SelectedOption = _this.props.selectedOptionComponent;
      return _this.props.selectedOptions.map(function (option) {
        return _react2.default.createElement(SelectedOption, {
          option: option,
          unselectOption: function unselectOption() {
            return _this.props.unselectOption(option);
          },
          key: option.value
        });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      var Select = this.props.selectComponent;
      return _react2.default.createElement(Select, {
        focused: this.props.focused,
        setFocus: this.props.setFocus,
        toggleFocus: this.props.toggleFocus,
        selectedOptions: this.renderSelectedOptions(),
        availableOptions: this.renderAvailableOptions()
      });
    }
  }]);

  return Layout;
}(_react.Component);

Layout.propTypes = {
  availableOptions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.string.isRequired
  })).isRequired,
  selectedOptions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.string.isRequired
  })).isRequired,
  focused: _propTypes2.default.bool.isRequired,
  selectComponent: _propTypes2.default.func.isRequired,
  availableOptionComponent: _propTypes2.default.func.isRequired,
  selectedOptionComponent: _propTypes2.default.func.isRequired,
  selectOption: _propTypes2.default.func.isRequired,
  unselectOption: _propTypes2.default.func.isRequired,
  toggleFocus: _propTypes2.default.func.isRequired,
  setFocus: _propTypes2.default.func.isRequired
};

exports.default = Layout;