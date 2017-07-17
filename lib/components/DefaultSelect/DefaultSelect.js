'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./DefaultSelect.css');

var _down_arrow = require('./assets/down_arrow.svg');

var _down_arrow2 = _interopRequireDefault(_down_arrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    width: '400px'
  },
  selectedOptionContainer: function selectedOptionContainer(focused) {
    return {
      border: '1px solid',
      borderColor: focused ? '#36558F' : 'lightgray',
      width: '400px',
      margin: '0 auto',
      padding: '0 30px 5px 0',
      display: 'flex',
      borderRadius: focused ? '3px 3px 0 0' : '3px',
      flexWrap: 'wrap',
      boxSizing: 'border-box',
      minHeight: '42px',
      position: 'relative'
    };
  },
  availableOptionsContainer: {
    border: '1px solid #36558F',
    borderTop: '0',
    borderRadius: '0 0 3px 3px',
    maxHeight: '200px',
    overflowY: 'auto'
  },
  arrowIcon: function arrowIcon(focused) {
    return {
      width: '30px',
      height: '100%',
      padding: '10px',
      right: '0',
      position: 'absolute',
      cursor: 'pointer',
      top: '50%',
      transform: 'translateY(-50%) ' + (focused ? 'rotate(180deg)' : ''),
      userSelect: 'none'
    };
  }
};

var DefaultSelect = function (_Component) {
  _inherits(DefaultSelect, _Component);

  function DefaultSelect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DefaultSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DefaultSelect.__proto__ || Object.getPrototypeOf(DefaultSelect)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickOutside = function (event) {
      _this.wrapperRef && !_this.wrapperRef.contains(event.target) && _this.props.setFocus(false);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DefaultSelect, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: 'componentWillUnMount',
    value: function componentWillUnMount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          selectedOptions = _props.selectedOptions,
          availableOptions = _props.availableOptions,
          focused = _props.focused,
          setFocus = _props.setFocus,
          toggleFocus = _props.toggleFocus;


      return _react2.default.createElement(
        'div',
        {
          onClick: function onClick() {
            return setFocus(true);
          },
          ref: function ref(_ref2) {
            return _this2.wrapperRef = _ref2;
          },
          style: styles.container,
          className: 'default-select-container'
        },
        _react2.default.createElement(
          'div',
          { style: styles.selectedOptionContainer(focused) },
          selectedOptions,
          _react2.default.createElement('img', {
            style: styles.arrowIcon(focused),
            onClick: toggleFocus,
            src: _down_arrow2.default,
            alt: 'Down arrow'
          })
        ),
        focused && _react2.default.createElement(
          'div',
          { style: styles.availableOptionsContainer },
          availableOptions
        )
      );
    }
  }]);

  return DefaultSelect;
}(_react.Component);

DefaultSelect.propTypes = {
  focused: _propTypes2.default.bool.isRequired,
  setFocus: _propTypes2.default.func.isRequired,
  toggleFocus: _propTypes2.default.func.isRequired,
  selectedOptions: _propTypes2.default.arrayOf(_propTypes2.default.element).isRequired,
  availableOptions: _propTypes2.default.arrayOf(_propTypes2.default.element).isRequired
};

exports.default = DefaultSelect;