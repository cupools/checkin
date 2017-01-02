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

var _shouldFormat = require('should-format');

var _shouldFormat2 = _interopRequireDefault(_shouldFormat);

var _assertionError = require('assertion-error');

var _assertionError2 = _interopRequireDefault(_assertionError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Detect = function () {
  function Detect() {
    var rules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, Detect);

    this.rules = rules;
  }

  (0, _createClass3.default)(Detect, [{
    key: 'detect',
    value: function detect(suit, key, val) {
      return _detect.call(null, this.rules, sort(this.rules, suit), key, val);
    }
  }, {
    key: 'addRule',
    value: function addRule(name, assert) {
      return new Detect((0, _extends4.default)({}, this.rules, (0, _defineProperty3.default)({}, name, assert)));
    }
  }]);
  return Detect;
}();

function _detect(rules, suit, key, val) {
  var context = { assert: assert };
  return (0, _keys2.default)(suit).reduce(function (ret, ruleName) {
    var condition = suit[ruleName];
    var rule = rules[ruleName];
    var rewrite = function rewrite(newVal) {
      return ret = newVal;
    };

    if (!rule) {
      return ret;
    }

    var result = rule.call(null, condition, ret);

    return result.rewrite || result.val;
  }, val);
}

function assert(expr) {
  if (expr) {
    return;
  }
}

function generateError(params) {
  var key = params.key,
      val = params.val,
      expected = params.expected,
      operate = params.operate,
      showDiff = params.showDiff;

  var message = 'expected [' + key + '] to ' + operate + ' ' + (0, _shouldFormat2.default)(expected) + ' ' + (showDiff ? 'but get ' + (0, _shouldFormat2.default)(val) : '');
  return new _assertionError2.default(message);
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