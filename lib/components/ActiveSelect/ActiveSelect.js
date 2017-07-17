'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DefaultSelectedOption = require('../DefaultSelectedOption/DefaultSelectedOption');

var _DefaultSelectedOption2 = _interopRequireDefault(_DefaultSelectedOption);

var _DefaultAvailableOption = require('../DefaultAvailableOption/DefaultAvailableOption');

var _DefaultAvailableOption2 = _interopRequireDefault(_DefaultAvailableOption);

var _DefaultSelect = require('../DefaultSelect/DefaultSelect');

var _DefaultSelect2 = _interopRequireDefault(_DefaultSelect);

var _Layout = require('./Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActiveSelect = function (_Component) {
  _inherits(ActiveSelect, _Component);

  function ActiveSelect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ActiveSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ActiveSelect.__proto__ || Object.getPrototypeOf(ActiveSelect)).call.apply(_ref, [this].concat(args))), _this), _this.setFocus = function (focused) {
      return _this.props.onChange({ focused: focused });
    }, _this.toggleFocus = function (event) {
      event.stopPropagation();
      _this.props.onChange({ focused: !_this.props.focused });
    }, _this.selectOption = function (option) {
      _this.props.onChange({ selectedOptions: [].concat(_toConsumableArray(_this.props.selectedOptions), [option]) });
    }, _this.unselectOption = function (option) {
      _this.props.onChange({
        selectedOptions: _this.props.selectedOptions.filter(function (selectedOption) {
          return selectedOption !== option;
        })
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ActiveSelect, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        toggleFocus: this.toggleFocus,
        setFocus: this.setFocus,
        selectOption: this.selectOption,
        unselectOption: this.unselectOption,
        focused: this.props.focused,
        selectedOptions: this.props.selectedOptions,
        availableOptions: this.props.availableOptions,
        selectComponent: this.props.selectComponent,
        selectedOptionComponent: this.props.selectedOptionComponent,
        availableOptionComponent: this.props.availableOptionComponent
      });
    }
  }]);

  return ActiveSelect;
}(_react.Component);

ActiveSelect.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  availableOptions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.string.isRequired
  })).isRequired,
  selectedOptions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.string.isRequired
  })).isRequired,
  focused: _propTypes2.default.bool,
  selectComponent: _propTypes2.default.func,
  availableOptionComponent: _propTypes2.default.func,
  selectedOptionComponent: _propTypes2.default.func
};

ActiveSelect.defaultProps = {
  selectedOptions: [],
  focused: false,
  selectComponent: _DefaultSelect2.default,
  availableOptionComponent: _DefaultAvailableOption2.default,
  selectedOptionComponent: _DefaultSelectedOption2.default
};

exports.default = ActiveSelect;