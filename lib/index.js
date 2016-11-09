'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _detect = require('./detect');

var _detect2 = _interopRequireDefault(_detect);

var _typeOf = require('./assert/typeOf');

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function lint(obj, suit) {
  (0, _keys2.default)(suit).forEach(function (key) {
    var rules = suit[key];
    var target = obj[key];

    _detect2.default.addRule('typeOf', _typeOf2.default)(rules, target);
  });
  return true;
}

lint.wrap = function (extend) {
  return function (obj, suit) {
    return lint(obj, (0, _extends3.default)({}, extend, suit));
  };
};

exports.default = lint;