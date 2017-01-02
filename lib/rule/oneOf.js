'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _includes = require('babel-runtime/core-js/array/includes');

var _includes2 = _interopRequireDefault(_includes);

exports.default = typeOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function typeOf(expr, val) {
  var expected = [].concat(expr);
  this.params.operate = 'to be one of';
  this.params.expected = expr;
  this.assert((0, _includes2.default)(expected, val));
}