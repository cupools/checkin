"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports.default = within;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function within(decl, val) {
  var _decl = (0, _slicedToArray3.default)(decl, 2),
      start = _decl[0],
      end = _decl[1];

  this.params.operate = "be within " + start + ".." + end;
  this.params.showDiff = true;
  this.assert(start <= val && val <= end);
}