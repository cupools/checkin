'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports.default = typeOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function typeOf(decl, val) {
  var _decl = (0, _slicedToArray3.default)(decl, 2),
      start = _decl[0],
      end = _decl[1];

  this.assert(start <= val && val <= end, (0, _stringify2.default)(val) + ' should be within ' + start + ' and ' + end);
}