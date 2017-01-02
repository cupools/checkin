"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = def;
function def(expr, val) {
  if (val === undefined) {
    this.params.val = expr;
  }
}

def.__order__ = 1e5;