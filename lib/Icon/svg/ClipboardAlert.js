'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('../SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClipboardAlert = function ClipboardAlert(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({}, props, { viewBox: '0 0 24 24' }),
    _react2.default.createElement('path', { d: 'M12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5M13,14H11V8H13M13,18H11V16H13M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z' })
  );
};

exports.default = ClipboardAlert;