'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var context = { assert: _assert2.default.ok };
var rules = {};

function detect(suit, obj) {
  (0, _keys2.default)(suit).forEach(function (ruleName) {
    var condition = suit[ruleName];
    var rule = rules[ruleName];

    if (rule) {
      rule.call(context, condition, obj);
    } else {
      console.log('rule `%s` not found', ruleName);
    }
  });
}

detect.addRule = function (name, assert) {
  rules[name] = assert;
  return detect;
};

exports.default = detect;