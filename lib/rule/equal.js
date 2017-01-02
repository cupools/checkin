'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = equal;

var _deepEql = require('deep-eql');

var _deepEql2 = _interopRequireDefault(_deepEql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function equal(expr, val) {
  this.params.operate = 'to be equal to';
  this.params.expected = expr;
  this.assert((0, _deepEql2.default)(expr, val));
}