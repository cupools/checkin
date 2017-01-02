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

var _lodash = require('lodash.sortby');

var _lodash2 = _interopRequireDefault(_lodash);

var _rule = require('./rule');

var _rule2 = _interopRequireDefault(_rule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Detect = function () {
  function Detect() {
    var rules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, Detect);

    this.rules = rules;
  }

  (0, _createClass3.default)(Detect, [{
    key: 'detect',
    value: function detect(key, suit, val) {
      return _detect.call(null, this.rules, key, sort(this.rules, suit), val);
    }
  }, {
    key: 'addRule',
    value: function addRule(name, assert) {
      return new Detect((0, _extends4.default)({}, this.rules, (0, _defineProperty3.default)({}, name, assert)));
    }
  }]);
  return Detect;
}();

function _detect(rules, key, suit, val) {
  return (0, _keys2.default)(suit).reduce(function (ret, ruleName) {
    var expr = suit[ruleName];
    var rule = rules[ruleName];

    if (!rule) {
      return ret;
    }

    var context = new _rule2.default({ key: key, val: ret });
    rule.call(context, expr, ret);

    return context.params.val;
  }, val);
}

function sort(rules, suit) {
  var orderKey = (0, _lodash2.default)((0, _keys2.default)(suit), function (key) {
    return rules[key] && rules[key].__order__ ? -rules[key].__order__ : 0;
  });
  return orderKey.reduce(function (ret, key) {
    return (0, _assign2.default)({}, ret, (0, _defineProperty3.default)({}, key, suit[key]));
  }, {});
}

exports.default = new Detect();