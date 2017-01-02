'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = satisfy;
function satisfy(fn, val) {
  this.params.operate = 'be satisfy to';
  this.params.expected = fn;
  this.assert(fn(val));
}