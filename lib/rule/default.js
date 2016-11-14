"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = def;
function def(fn, val) {
  if (val !== undefined) {
    this.set(fn(val));
  }
}