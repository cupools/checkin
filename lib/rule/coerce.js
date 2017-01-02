"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = coerce;
function coerce(fn, val) {
  this.params.val = fn(val);
}

coerce.__order__ = 1e4;