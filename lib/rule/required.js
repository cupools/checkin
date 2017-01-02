'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = required;
function required(expr, val) {
  if (expr) {
    this.params.operate = 'to be required';
    this.assert(val !== undefined);
  }
}