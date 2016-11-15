'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.default = equal;

var _deepEql = require('deep-eql');

var _deepEql2 = _interopRequireDefault(_deepEql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function equal(expected, val) {
  this.assert((0, _deepEql2.default)(expected, val), (0, _stringify2.default)(expected) + ' should be equal to ' + (0, _stringify2.default)(val));
}