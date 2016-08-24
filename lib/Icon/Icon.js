'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconDimensions = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _svg = require('./svg');

var _svg2 = _interopRequireDefault(_svg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconDimensions = exports.iconDimensions = {
  sm: '14px',
  md: '18px',
  lg: '24px'
};

var Icon = function Icon(props) {
  var icon = _svg2.default[props.name];
  var size = iconDimensions[props.size] || props.size;

  if (!props.width && !props.height) {
    props = _extends({}, props, { width: size, height: size });
  }

  return _react2.default.cloneElement(icon(_extends({ style: { display: 'flex' } }, props)));
};

Icon.propTypes = {
  name: _react.PropTypes.oneOf(Object.keys(_svg2.default)),
  size: _react.PropTypes.string,
  margin: _react.PropTypes.string,
  title: _react.PropTypes.string,
  fill: _react.PropTypes.string
};

Icon.defaultProps = {
  title: 'icon',
  fill: 'currentColor',
  size: 'md'
};

exports.default = Icon;