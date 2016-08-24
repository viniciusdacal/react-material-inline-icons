'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIcon = function SvgIcon(props) {
  return _react2.default.createElement('svg', props);
};

SvgIcon.defaultProps = {
  viewBox: '0 0 24 24'
};

exports.default = SvgIcon;