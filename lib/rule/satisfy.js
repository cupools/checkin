'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.default = satisfy;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function satisfy(fn, val) {
  this.assert(fn(val), (0, _stringify2.default)(val) + ' should be satify to given function');
}