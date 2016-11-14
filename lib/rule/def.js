"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = def;
function def(expected, val) {
  if (val === undefined) {
    this.set(expected);
  }
}