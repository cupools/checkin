'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _includes = require('babel-runtime/core-js/array/includes');

var _includes2 = _interopRequireDefault(_includes);

exports.default = typeOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function typeOf(expr, val) {
  var type = Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
  var expectTypes = [].concat(expr);

  this.params.operate = 'be type of ' + expectTypes.map(function (s) {
    return s.replace(/\w/, function ($1) {
      return $1.toUpperCase();
    });
  }).join(', ');
  this.params.showDiff = true;
  this.assert((0, _includes2.default)(expectTypes, type));
}