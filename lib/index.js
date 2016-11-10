'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.default = lint;

var _detect = require('./detect');

var _detect2 = _interopRequireDefault(_detect);

var _typeOf = require('./assert/typeOf');

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function process(detect, suit, obj) {
  (0, _keys2.default)(suit).forEach(function (key) {
    var rules = suit[key];
    var target = obj[key];
    detect.detect(rules, target);
  });

  return true;
}

function lint(obj, suit) {
  var detect = _detect2.default.addRule('typeOf', _typeOf2.default);

  return process(detect, suit, obj);
}