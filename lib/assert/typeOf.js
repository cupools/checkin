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

function typeOf(decl, obj) {
  var type = Object.prototype.toString.call(obj);
  var expectTypes = [].concat(decl);

  this.assert(!(0, _includes2.default)(expectTypes, type), (0, _stringify2.default)(obj) + ' should be type of ' + (0, _stringify2.default)(expectTypes.join(', ')));
}