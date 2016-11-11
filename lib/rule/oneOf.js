'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _includes = require('babel-runtime/core-js/array/includes');

var _includes2 = _interopRequireDefault(_includes);

exports.default = typeOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function typeOf(decl, val) {
  var expected = [].concat(decl);

  this.assert((0, _includes2.default)(expected, val), (0, _stringify2.default)(val) + ' should be one of ' + (0, _stringify2.default)(expected.join(', ')));
}