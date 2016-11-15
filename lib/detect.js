'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _lodash = require('lodash.sortby');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Detect = function () {
  function Detect(rules) {
    (0, _classCallCheck3.default)(this, Detect);

    this.rules = rules;
  }

  (0, _createClass3.default)(Detect, [{
    key: 'detect',
    value: function detect(suit, val) {
      return _detect.call(null, this.rules, sort(this.rules, suit), val);
    }
  }, {
    key: 'addRule',
    value: function addRule(name, assert) {
      return new Detect((0, _extends4.default)({}, this.rules, (0, _defineProperty3.default)({}, name, assert)));
    }
  }]);
  return Detect;
}();

function _detect(rules, suit, val) {
  return (0, _keys2.default)(suit).reduce(function (ret, ruleName) {
    var condition = suit[ruleName];
    var rule = rules[ruleName];
    var rewrite = function rewrite(newVal) {
      return ret = newVal;
    };

    if (rule) {
      rule.call({ assert: _assert2.default.ok, set: rewrite }, condition, ret);
    } else {
      console.log('rule `%s` not found', ruleName);
    }

    return ret;
  }, val);
}

function sort(rules, suit) {
  var orderKey = (0, _lodash2.default)((0, _keys2.default)(suit), function (key) {
    return rules[key] ? 0 - rules[key].__order__ || 0 : 0;
  });
  return orderKey.reduce(function (ret, key) {
    return (0, _assign2.default)({}, ret, (0, _defineProperty3.default)({}, key, suit[key]));
  }, {});
}

exports.default = new Detect();