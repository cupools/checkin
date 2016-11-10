'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addRule = exports.wrap = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _detect = require('./detect');

var _detect2 = _interopRequireDefault(_detect);

var _index = require('./rule/index');

var defaultRule = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extendRule = {};

function process(detect, suit, obj) {
  (0, _keys2.default)(suit).forEach(function (key) {
    var rules = suit[key];
    var target = obj[key];
    detect.detect(rules, target);
  });

  return true;
}

function lint(obj, suit) {
  var combine = (0, _extends3.default)({}, defaultRule, extendRule);
  var detect = (0, _keys2.default)(combine).reduce(function (ret, key) {
    return ret.addRule(key, combine[key]);
  }, _detect2.default);

  return process(detect, suit, obj);
}

var wrap = exports.wrap = function wrap(extend) {
  return function (obj, suit) {
    return lint(obj, (0, _assign2.default)({}, extend, suit));
  };
};

var addRule = exports.addRule = function addRule(name, assert) {
  extendRule[name] = assert;
  return lint;
};

exports.default = lint;