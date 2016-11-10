'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var context = { assert: _assert2.default.ok };

var Detect = function () {
  function Detect(rules) {
    (0, _classCallCheck3.default)(this, Detect);

    this.rules = rules;
  }

  (0, _createClass3.default)(Detect, [{
    key: 'detect',
    value: function detect(suit, obj) {
      return _detect.call(null, this.rules, suit, obj) && this;
    }
  }, {
    key: 'addRule',
    value: function addRule(name, assert) {
      return new Detect((0, _extends4.default)({}, this.rules, (0, _defineProperty3.default)({}, name, assert)));
    }
  }]);
  return Detect;
}();

function _detect(rules, suit, obj) {
  (0, _keys2.default)(suit).forEach(function (ruleName) {
    var condition = suit[ruleName];
    var rule = rules[ruleName];

    if (rule) {
      rule.call(context, condition, obj);
    } else {
      console.log('rule `%s` not found', ruleName);
    }
  });
  return true;
}

exports.default = new Detect();